import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 }, // ramp up to 100 users
    { duration: '5m', target: 100 }, // stay at 100 users for 5 minutes
    { duration: '1m', target: 0 }, // ramp down to 0 users
  ],
};

export default function () {
  const res = http.get('http://localhost:4200/digital-marketing');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is less than 500ms': (r) => r.timings.duration < 500,
  });
  sleep(1);
}

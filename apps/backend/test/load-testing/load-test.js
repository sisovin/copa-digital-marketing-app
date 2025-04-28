const { loadTest } = require('loadtest');

const options = {
  url: 'http://localhost:3333/api/agencies',
  maxRequests: 1000,
  concurrency: 100,
  method: 'GET',
  statusCallback: (error, result, latency) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Status code:', result.statusCode);
      console.log('Request elapsed milliseconds:', latency.elapsedMs);
      console.log('Request index:', result.requestIndex);
      console.log('Request loadtest instance index:', result.instanceIndex);
    }
  },
};

loadTest(options, (error, result) => {
  if (error) {
    return console.error('Got an error:', error);
  }
  console.log('Tests run successfully:', result);
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckService, TypeOrmHealthIndicator, HealthCheck } from '@nestjs/terminus';
import { PrometheusModule, makeCounterProvider } from '@willsoto/nestjs-prometheus';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  // Health check setup
  const healthCheckService = app.get(HealthCheckService);
  const typeOrmHealthIndicator = app.get(TypeOrmHealthIndicator);
  app.use('/health', async (req, res) => {
    const result = await healthCheckService.check([
      () => typeOrmHealthIndicator.pingCheck('database'),
    ]);
    res.status(result.status === 'ok' ? 200 : 503).json(result);
  });

  // Monitoring setup
  app.use('/metrics', async (req, res) => {
    res.set('Content-Type', PrometheusModule.getContentType());
    res.end(await PrometheusModule.metrics());
  });

  await app.listen(3333);
}
bootstrap();

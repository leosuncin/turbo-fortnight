import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import type { App } from 'supertest/types';

import { AppModule } from '../src/app.module.js';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close()
  })

  it('/task (POST)', async () => {
    const data = { description: 'Just do it' }

    await request(app.getHttpServer())
      .post('/task')
      .send(data)
      .expect(HttpStatus.CREATED)
      .expect((response) => {
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('description', data.description)
        expect(response.body).toHaveProperty('done', false)
      });
  });

  it('/task (GET)', async () => {
    await request(app.getHttpServer())
      .get('/task')
      .expect(HttpStatus.OK)
      .expect((response) => {
        expect(response.body).toEqual(expect.arrayContaining([]))
      });
  });
});

import { TestBed } from '@suites/unit';

import { TaskService } from './task.service.js';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const { unit } = await TestBed.solitary(TaskService).compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

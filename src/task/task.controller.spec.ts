import { TestBed } from '@suites/unit';

import { TaskController } from './task.controller.js';
import { TaskService } from './task.service.js';

describe('TaskController', () => {
  let controller: TaskController;

  beforeEach(async () => {
    const { unit } = await TestBed.sociable(TaskController).expose(TaskService).compile();

    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { CreateTask } from './dto/create-task.dto.js';
import { UpdateTask } from './dto/update-task.dto.js';
import { Task } from './entities/task.entity.js';
import { TaskService } from './task.service.js';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    createTask: CreateTask,
  ) {
    return this.taskService.create(createTask);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: Task['id']) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: Task['id'],
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    updateTask: UpdateTask,
  ) {
    return this.taskService.update(id, updateTask);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: Task['id']) {
    return this.taskService.remove(id);
  }
}

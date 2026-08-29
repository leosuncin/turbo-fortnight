import { Injectable } from '@nestjs/common';
import { CreateTask } from './dto/create-task.dto.js';
import { UpdateTask } from './dto/update-task.dto.js';
import { Task } from './entities/task.entity.js';

@Injectable()
export class TaskService {
  #db = new Map<Task['id'], Task>();

  create(createTask: CreateTask) {
    const task = new Task();

    task.description = createTask.description;

    this.#db.set(task.id, task);

    return task;
  }

  findAll() {
    return this.#db.values();
  }

  findOne(id: Task['id']) {
    return this.#db.get(id);
  }

  update(id: Task['id'], updateTask: UpdateTask) {
    const task = this.#db.get(id);

    if (task) {
      Object.assign(task, updateTask);
    }

    return task;
  }

  remove(id: Task['id']) {
    const task = this.#db.get(id);

    this.#db.delete(id);

    return task;
  }
}

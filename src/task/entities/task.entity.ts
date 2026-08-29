import { randomUUID } from 'node:crypto';

export class Task {
  id = randomUUID();

  description!: string;

  done = false;
}

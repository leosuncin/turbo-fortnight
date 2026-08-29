import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateTask } from './create-task.dto.js';

export class UpdateTask extends PartialType(CreateTask) {
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  readonly done?: boolean;
}

import { BaseModel } from '@chow/shared';
import { Prop } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { Schema } from 'mongoose';

export class BaseSchema implements BaseModel {
  @Prop({ required: true, type: Schema.Types.Date })
  created?: Date;

  @Prop({ required: true, type: Schema.Types.Date })
  updated?: Date;

  @Prop({ type: Schema.Types.Date })
  deleted?: Date;

  @Transform(({ value }) => value.toString())
  _id?: string;

  _v?: number;
}

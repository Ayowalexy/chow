import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../../../helpers/database/base.schema';
import { Document, Schema as MSchema } from 'mongoose';
import { ShirtSize, User as UserModel } from '@chow/shared';

export type UserDocument = User & Document;

@Schema()
export class User extends BaseSchema implements UserModel {
  @Prop({ required: true, type: MSchema.Types.String })
  name: string;

  @Prop({ unique: true, required: true, type: MSchema.Types.String })
  email: string;

  @Prop({ required: true, type: MSchema.Types.String })
  foodInterest: string;

  @Prop({ unique: true, required: true, type: MSchema.Types.String })
  phoneNumber: string;

  @Prop({
    required: true,
    type: MSchema.Types.String,
    enum: Object.values(ShirtSize),
  })
  shirtSize: ShirtSize;
}

export const UserSchema = SchemaFactory.createForClass(User);

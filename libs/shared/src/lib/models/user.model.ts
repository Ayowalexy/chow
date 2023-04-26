import { BaseModel } from './base.model';

export enum ShirtSize {
  small = 'S',
  medium = 'M',
  large = 'L',
  extraLarge = 'XL',
}

export interface User extends BaseModel {
  name: string;
  email: string;
  foodInterest: string;
  phoneNumber: string;
  shirtSize: ShirtSize;
}

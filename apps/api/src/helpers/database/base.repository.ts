import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { BaseSchema } from './base.schema';

export class BaseRepository<M extends BaseSchema> {
  constructor(protected model: Model<M>) {}

  async create(entity: M): Promise<M> {
    const newEntity = new this.model(entity);
    newEntity.created = new Date();
    newEntity.updated = new Date();
    newEntity.deleted = null;
    return newEntity.save();
  }

  async findAll() {
    return this.model.find();
  }

  async findOne(filter: FilterQuery<M>) {
    return this.model.findOne(filter);
  }

  async findById(id: string) {
    return this.model.findById(id);
  }

  async updateById(id: string, updates: UpdateQuery<M>) {
    return this.model.updateOne({ _id: id }, updates);
  }

  async update(filter: FilterQuery<M>, updates: UpdateQuery<M>) {
    return this.model.updateOne(filter, updates);
  }
}

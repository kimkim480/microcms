import { Model } from "mongoose";

import { ICreateCategoryDTO } from "@modules/documents/dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "@modules/documents/repositories/ICategoriesRepository";

import { Category } from "../entities/Category";
import { CategoryModel } from "../schemas/CategorySchema";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Model<Category>;

  constructor() {
    this.repository = CategoryModel;
  }

  async create({ name, slug }: ICreateCategoryDTO): Promise<void> {
    await this.repository.create({ name, slug });
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name }).exec();

    return category;
  }

  async findBySlug(slug: string): Promise<Category> {
    const category = await this.repository.findOne({ slug }).exec();

    return category;
  }

  async list(): Promise<Category[]> {
    const all = await this.repository.find().exec();

    return all;
  }
}

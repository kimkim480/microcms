import { Model } from "mongoose";

import { ICreateCategoryDTO } from "@modules/documents/dtos/ICreateCategoryDTO";
import { IUpdateCategoryDTO } from "@modules/documents/dtos/IUpdateCategoryDTO";
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

  async list(name?: string, slug?: string, id?: string): Promise<Category[]> {
    if (name) {
      return this.repository.where("name").equals(name).exec();
    }

    if (slug) {
      return this.repository.where("slug").equals(slug).exec();
    }

    if (id) {
      return this.repository.where("_id").equals(id).exec();
    }

    return this.repository.find().exec();
  }

  async update(
    id: string,
    { name, slug }: IUpdateCategoryDTO
  ): Promise<Category> {
    let category: Category;

    if (name) {
      category = await this.repository
        .findByIdAndUpdate(id, { name }, { new: true })
        .exec();
    }

    if (slug) {
      category = await this.repository
        .findByIdAndUpdate(id, { slug }, { new: true })
        .exec();
    }

    return category;
  }

  async delete(id: string): Promise<Category> {
    const deletedCategory = await this.repository.findByIdAndDelete(id).exec();

    return deletedCategory;
  }
}

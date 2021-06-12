import { ICreateCategoryDTO } from "@modules/documents/dtos/ICreateCategoryDTO";
import { Category } from "@modules/documents/infra/mongoose/entities/Category";

import { ICategoriesRepository } from "../ICategoriesRepository";

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ name, slug }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { name, slug });

    this.categories.push(category);
  }

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }

  async list(): Promise<Category[]> {
    const all = this.categories;

    return all;
  }
}

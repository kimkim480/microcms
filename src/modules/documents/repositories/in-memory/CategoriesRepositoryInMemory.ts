import { ICreateCategoryDTO } from "@modules/documents/dtos/ICreateCategoryDTO";
import { IUpdateCategoryDTO } from "@modules/documents/dtos/IUpdateCategoryDTO";
import { Category } from "@modules/documents/infra/mongoose/entities/Category";
import { AppError } from "@shared/errors/AppErrors";

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

  async findBySlug(slug: string): Promise<Category> {
    const category = this.categories.find((category) => category.slug === slug);

    return category;
  }

  async list(name?: string, slug?: string, id?: string): Promise<Category[]> {
    let all = this.categories.filter(
      (category) =>
        category.name === name || category.slug === slug || category.id === id
    );

    if (all.length < 1) {
      all = this.categories;
    }

    return all;
  }

  async update(
    id: string,
    { name, slug }: IUpdateCategoryDTO
  ): Promise<Category> {
    const category = this.categories.find((category) => category.id === id);

    if (!category) {
      throw new AppError("Category not found");
    }

    if (name) {
      category.name = name;
    }

    if (slug) {
      category.slug = slug;
    }

    return category;
  }
}

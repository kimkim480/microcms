import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "@modules/documents/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppErrors";

interface IRequest {
  name: string;
  slug: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, slug }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    const slugAlreadyExists = await this.categoriesRepository.findBySlug(slug);

    if (slugAlreadyExists) {
      throw new AppError("Slug already exists");
    }

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists");
    }

    await this.categoriesRepository.create({ name, slug });
  }
}

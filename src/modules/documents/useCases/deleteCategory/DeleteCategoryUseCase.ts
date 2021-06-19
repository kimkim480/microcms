import { inject, injectable } from "tsyringe";

import { Category } from "@modules/documents/infra/mongoose/entities/Category";
import { ICategoriesRepository } from "@modules/documents/repositories/ICategoriesRepository";

@injectable()
export class DeleteCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(id: string): Promise<Category> {
    const deletedCategory = await this.categoriesRepository.delete(id);

    return deletedCategory;
  }
}

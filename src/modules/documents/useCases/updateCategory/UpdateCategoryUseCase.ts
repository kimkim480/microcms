import { injectable, inject } from "tsyringe";

import { IUpdateCategoryDTO } from "@modules/documents/dtos/IUpdateCategoryDTO";
import { Category } from "@modules/documents/infra/mongoose/entities/Category";
import { ICategoriesRepository } from "@modules/documents/repositories/ICategoriesRepository";

@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute(id, { name, slug }: IUpdateCategoryDTO): Promise<Category> {
    const updatedCategory = await this.categoriesRepository.update(id, {
      name,
      slug,
    });

    return updatedCategory;
  }
}

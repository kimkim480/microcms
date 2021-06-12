import { inject, injectable } from "tsyringe";

import { Category } from "@modules/documents/infra/mongoose/entities/Category";
import { ICategoriesRepository } from "@modules/documents/repositories/ICategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    return this.categoriesRepository.list();
  }
}

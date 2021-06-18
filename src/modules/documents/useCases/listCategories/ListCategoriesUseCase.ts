import { inject, injectable } from "tsyringe";

import { Category } from "@modules/documents/infra/mongoose/entities/Category";
import { ICategoriesRepository } from "@modules/documents/repositories/ICategoriesRepository";

interface IRequest {
  id?: string;
  name?: string;
  slug?: string;
}

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(data?: IRequest): Promise<Category[]> {
    return this.categoriesRepository.list(data?.name, data?.slug, data?.id);
  }
}

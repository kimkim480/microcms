import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../infra/mongoose/entities/Category";

export interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  findBySlug(slug: string): Promise<Category>;
  list(): Promise<Category[]>;
}

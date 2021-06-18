import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { IUpdateCategoryDTO } from "../dtos/IUpdateCategoryDTO";
import { Category } from "../infra/mongoose/entities/Category";

export interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  findBySlug(slug: string): Promise<Category>;
  list(name?: string, slug?: string, id?: string): Promise<Category[]>;
  update(id: string, options: IUpdateCategoryDTO): Promise<Category>;
}

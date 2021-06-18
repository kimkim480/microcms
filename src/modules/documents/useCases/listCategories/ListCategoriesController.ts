import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, slug, category_id } = request.query;
    const repository = container.resolve(ListCategoriesUseCase);
    const categories = await repository.execute({
      name: name as string,
      slug: slug as string,
      id: category_id as string,
    });

    return response.status(200).json(categories);
  }
}

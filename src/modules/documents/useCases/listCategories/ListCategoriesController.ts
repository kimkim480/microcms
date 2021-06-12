import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  async hangle(request: Request, response: Response): Promise<Response> {
    const repository = container.resolve(ListCategoriesUseCase);
    const categories = await repository.execute();

    return response.status(200).json(categories);
  }
}

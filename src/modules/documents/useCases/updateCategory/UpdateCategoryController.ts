import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

export class UpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, slug } = request.body;

    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);

    const category = await updateCategoryUseCase.execute(id, { name, slug });

    return response.json(category);
  }
}

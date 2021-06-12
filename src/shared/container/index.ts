import { container } from "tsyringe";

import { CategoriesRepository } from "@modules/documents/infra/mongoose/repositories/CategoriesRepository";
import { ICategoriesRepository } from "@modules/documents/repositories/ICategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

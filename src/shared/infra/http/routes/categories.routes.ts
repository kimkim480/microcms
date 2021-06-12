import { Router } from "express";

import { CreateCategoryController } from "@modules/documents/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "@modules/documents/useCases/listCategories/ListCategoriesController";

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.hangle);

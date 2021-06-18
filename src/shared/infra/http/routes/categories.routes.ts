import { Router } from "express";

import { CreateCategoryController } from "@modules/documents/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "@modules/documents/useCases/listCategories/ListCategoriesController";
import { UpdateCategoryController } from "@modules/documents/useCases/updateCategory/UpdateCategoryController";

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const updateCategoryController = new UpdateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.patch("/:id", updateCategoryController.handle);

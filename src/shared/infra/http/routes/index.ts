import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";

export const router = Router();

router.use("/categories", categoriesRoutes);

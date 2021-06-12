import { model, Schema } from "mongoose";

import { Category } from "../entities/Category";

const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
});

export const CategoryModel = model<Category>("Category", categorySchema);

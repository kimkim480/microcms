import { CategoriesRepositoryInMemory } from "@modules/documents/repositories/in-memory/CategoriesRepositoryInMemory";
import { AppError } from "@shared/errors/AppErrors";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Create caregory", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "new Category",
      slug: "new slug",
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category whith name that already exists", () => {
    expect(async () => {
      const category = {
        name: "new Category",
        slug: "new slug",
      };

      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});

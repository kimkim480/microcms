import { CategoriesRepositoryInMemory } from "@modules/documents/repositories/in-memory/CategoriesRepositoryInMemory";
import { AppError } from "@shared/errors/AppErrors";

import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;
let updateCategoryUseCase: UpdateCategoryUseCase;

describe("Update caregory", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
    updateCategoryUseCase = new UpdateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to update a category", async () => {
    const category = {
      name: "new Category",
      slug: "new slug",
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    const updatedCategory = await updateCategoryUseCase.execute(
      categoryCreated.id,
      { name: "new name Category", slug: "new name slug" }
    );

    expect(updatedCategory.name).toEqual("new name Category");
    expect(updatedCategory.slug).toEqual("new name slug");
  });

  it("should not be able to update an inexistent category", async () => {
    expect(async () => {
      await updateCategoryUseCase.execute("213545654", {
        name: "new name Category",
        slug: "new name slug",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

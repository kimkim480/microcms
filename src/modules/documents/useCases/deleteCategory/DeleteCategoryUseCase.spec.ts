import { CategoriesRepositoryInMemory } from "@modules/documents/repositories/in-memory/CategoriesRepositoryInMemory";

import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

let deleteCategoryUseCase: DeleteCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Delete Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    deleteCategoryUseCase = new DeleteCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to delete a category", async () => {
    await categoriesRepositoryInMemory.create({
      name: "category 1",
      slug: "slug 2",
    });
    await categoriesRepositoryInMemory.create({
      name: "category 3",
      slug: "slug 3",
    });
    await categoriesRepositoryInMemory.create({
      name: "category",
      slug: "slug",
    });

    const category = await categoriesRepositoryInMemory.findByName("category");

    const deletedCategory = await deleteCategoryUseCase.execute(category.id);

    expect(deletedCategory).toHaveProperty("id");
  });
});

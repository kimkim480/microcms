import { CategoriesRepositoryInMemory } from "@modules/documents/repositories/in-memory/CategoriesRepositoryInMemory";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let listCategoriesUseCase: ListCategoriesUseCase;

describe("List Categories", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    listCategoriesUseCase = new ListCategoriesUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to list all categories", async () => {
    const categories = await listCategoriesUseCase.execute();
  });
});

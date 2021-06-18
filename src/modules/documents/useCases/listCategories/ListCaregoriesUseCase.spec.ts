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
    await categoriesRepositoryInMemory.create({ name: "test", slug: "test" });
    await categoriesRepositoryInMemory.create({ name: "test 1", slug: "test" });
    await categoriesRepositoryInMemory.create({ name: "test 2", slug: "test" });

    const categories = await listCategoriesUseCase.execute();

    expect(categories.length).toBe(3);
  });

  it("should be able to list category by name", async () => {
    await categoriesRepositoryInMemory.create({ name: "test", slug: "slug" });

    await categoriesRepositoryInMemory.create({
      name: "test 1",
      slug: "slug 1",
    });

    await categoriesRepositoryInMemory.create({
      name: "test 2",
      slug: "slug 2",
    });

    const categories = await listCategoriesUseCase.execute({ name: "test 1" });

    expect(categories.length).toBe(1);
  });

  it("should be able to list category by slug", async () => {
    await categoriesRepositoryInMemory.create({ name: "test", slug: "slug" });

    await categoriesRepositoryInMemory.create({
      name: "test 1",
      slug: "slug 1",
    });

    await categoriesRepositoryInMemory.create({
      name: "test 2",
      slug: "slug 2",
    });

    const categories = await listCategoriesUseCase.execute({ slug: "slug 1" });

    expect(categories.length).toBe(1);
  });

  it("should be able to list category by id", async () => {
    await categoriesRepositoryInMemory.create({ name: "test", slug: "slug" });

    await categoriesRepositoryInMemory.create({
      name: "test 1",
      slug: "slug 1",
    });

    await categoriesRepositoryInMemory.create({
      name: "test 2",
      slug: "slug 2",
    });

    const category = await categoriesRepositoryInMemory.findByName("test");

    const categories = await listCategoriesUseCase.execute({
      id: category.id,
    });

    expect(categories.length).toBe(1);
  });
});

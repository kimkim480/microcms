import { v4 as uuidv4 } from "uuid";

export class Category {
  id: string;
  name: string;
  slug: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

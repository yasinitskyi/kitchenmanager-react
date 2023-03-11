import Immerable from '../Immerable';
import User from '../User';

export interface KitchenOptions {
  name?: string;
  uuid?: string;
  createdAt?: Date;
  personal?: boolean;
  ingredients?: Ingredient[];
  recipes?: Recipe[];
  headChefs?: User[];
  sousChefs?: User[];
}

export default class Kitchen extends Immerable {
  name = '';

  uuid = '';

  createdAt: Date = new Date();

  personal = true;

  ingredients: Ingredient[] = [];

  recipes: Recipe[] = [];

  headChefs: User[] = [];

  sousChefs: User[] = [];

  constructor(options?: KitchenOptions) {
    super();

    if (!options) return;

    if (options.name) this.name = options.name;

    if (options.uuid) this.uuid = options.uuid;

    if (options.createdAt) this.createdAt = options.createdAt;

    if (options.personal) this.personal = options.personal;

    if (options.ingredients) this.ingredients = options.ingredients;

    if (options.recipes) this.recipes = options.recipes;

    if (options.headChefs) this.headChefs = options.headChefs;

    if (options.sousChefs) this.sousChefs = options.sousChefs;
  }
}

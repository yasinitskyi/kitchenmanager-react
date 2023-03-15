import Immerable from '../Immerable';
import User from '../User';
import Ingredient from '../Ingredient';
import Comment from '../Comment';

interface RecipeOptions {
  name?: string;

  uuid?: string;

  createdAt?: Date;

  description?: string;

  instructions?: string[];

  ingredients?: Ingredient[];

  author?: User;

  comments?: Comment[];
}

export default class Recipe extends Immerable {
  name: string = '';

  uuid: string = '';

  createdAt: Date = new Date();

  description: string = '';

  instructions: string[] = [];

  ingredients: Ingredient[] = [];

  author: User = new User();

  comments: Comment[] = [];

  constructor(options?: RecipeOptions) {
    super();

    if (!options) return;

    if (options.name) this.name = options.name;

    if (options.uuid) this.uuid = options.uuid;

    if (options.createdAt) this.createdAt = options.createdAt;

    if (options.description) this.description = options.description;

    if (options.instructions) this.instructions = options.instructions;

    if (options.ingredients) this.ingredients = options.ingredients;

    if (options.author) this.author = options.author;

    if (options.comments) this.comments = options.comments;
  }
}

import Immerable from '../Immerable';
import Ingredient from '../Ingredient';

interface ShoppingListOptions {
  items?: Ingredient[];

  uuid?: string;
}

export default class ShoppingList extends Immerable {
  items: Ingredient[] = [];

  uuid: string = '';

  constructor(options?: ShoppingListOptions) {
    super();

    if (!options) return;

    if (options.items) this.items = options.items;

    if (options.uuid) this.uuid = options.uuid;
  }
}

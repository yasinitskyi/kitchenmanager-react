import Immerable from '../Immerable';

interface GroceryOptions {
  name?: string;

  description?: string;

  unit?: string;
}

export default class Grocery extends Immerable {
  name: string = '';

  description: string = '';

  unit: string = '';

  constructor(options?: GroceryOptions) {
    super();

    if (!options) return;

    if (options.name) this.name = options.name;

    if (options.description) this.description = options.description;

    if (options.unit) this.unit = options.unit;
  }
}

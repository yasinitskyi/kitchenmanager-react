import Immerable from '../Immerable';
import Grocery from '../Grocery';
import { v4 as uuidv4 } from 'uuid';

interface IngredientOptions {
  grocery?: Grocery;

  amount?: number;

  uuid?: string;
}

export default class Ingredient extends Immerable {
  grocery = new Grocery();

  amount: number = 0;

  uuid: string = '';

  constructor(options?: IngredientOptions) {
    super();

    if (!options) return;

    if (options.grocery) this.grocery = options.grocery;

    if (options.amount) this.amount = options.amount;

    if (options.uuid) this.uuid = options.uuid;
    else this.uuid = uuidv4();
  }
}

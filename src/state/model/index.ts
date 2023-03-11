import Immerable from '../../models/Immerable';

export default class KitchenState extends Immerable {
  selectedKitchen: Kitchen;

  availableKitchens: Kitchen[];

  user: User;
}

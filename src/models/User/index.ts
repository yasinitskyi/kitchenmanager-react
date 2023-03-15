import Immerable from '../Immerable';

interface UserOptions {
  username?: string;
  email?: string;
  createdAt?: Date;
}

export default class User extends Immerable {
  username: string = '';

  email: string = '';

  createdAt: Date = new Date();

  constructor(options?: UserOptions) {
    super();

    if (!options) return;

    if (options.username) this.username = options.username;

    if (options.email) this.email = options.email;

    if (options.createdAt) this.createdAt = options.createdAt;
  }
}

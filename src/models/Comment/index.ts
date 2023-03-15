import Immerable from '../Immerable';

interface CommentOptions {
  user?: string,

  createdAt?: Date,

  content?: string,

  uuid?: string,
}

export default class Comment extends Immerable {
  user: string = '';

  createdAt: Date = new Date();

  content: string = '';

  uuid: string = '';

  constructor(options?: CommentOptions) {
    super();

    if (!options) return;

    if (options.user) this.user = options.user;

    if (options.createdAt) this.createdAt = options.createdAt;

    if (options.content) this.content = options.content;

    if (options.uuid) this.uuid = options.uuid;
  }
}

export type CommentType = {
  id: number;
  postId?: number;
  name: string;
  email: string;
  body: string;
};

export type PostType = {
  id: number;
  userid?: number;
  title: string;
  body: string;
  comments: CommentType[];
};

export type UserType = {
  id: number;
  name: string;
  username?: string;
  email?: string;
  posts: PostType[];
};

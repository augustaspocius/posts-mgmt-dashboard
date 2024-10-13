import { PostType, Post } from "./Post.tsx";

type UserType = {
  name: string;
  posts: PostType[];
};

export default function User({ name, posts }: UserType) {
  return (
    <div className="my-4">
      <h2>{name} posts: </h2>
      <ul>
        {posts.map((post) => {
          return (
            <Post
              id={post.id}
              content={post.content}
              comments={post.comments}
            />
          );
        })}
      </ul>
    </div>
  );
}

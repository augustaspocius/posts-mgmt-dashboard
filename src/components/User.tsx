import { Post } from "./Post.tsx";
import { UserType } from "../types.tsx";

export default function User({ id, name, posts }: UserType) {
  return (
    <li key={id} className="my-4">
      <h2>{name} posts: </h2>
      <ul>
        {posts.map((post) => {
          return (
            <Post
              id={post.id}
              title={post.title}
              body={post.body}
              comments={post.comments}
            />
          );
        })}
      </ul>
    </li>
  );
}

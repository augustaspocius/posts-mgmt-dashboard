import { Post } from "./Post.tsx";
import { UserType } from "../types.tsx";

export default function User({ id, name, posts }: UserType) {
  return (
    <li className="m-4 rounded-lg bg-purple-50 p-4">
      <h2 className="text-left">{name} posts: </h2>
      <ul key={id}>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
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

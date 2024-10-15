import { Comment } from "./Comment.tsx";
import { PostType } from "../types.tsx";

export function Post({ userid, title, body, comments }: PostType) {
  return (
    <li key={userid} className="m-4 rounded-md bg-blue-50 p-4">
      <h4>{title}</h4>
      <p>{body}</p>
      <ul>
        {comments.map((comment) => {
          return <Comment key={comment.id} {...comment}></Comment>;
        })}
      </ul>
    </li>
  );
}

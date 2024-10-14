import { Comment } from "./Comment.tsx";
import { PostType } from "../types.tsx";

export function Post({ userid, title, body, comments }: PostType) {
  return (
    <li key={userid}>
      <h4>{title}</h4>
      <p>{body}</p>
      <ul>
        {comments.map((comment) => {
          return <Comment {...comment}></Comment>;
        })}
      </ul>
    </li>
  );
}

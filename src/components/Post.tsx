import { CommentType, Comment } from "./Comment.tsx";

export type PostType = {
  id: string;
  content: string;
  comments: CommentType[];
};

export function Post({ id, content, comments }: PostType) {
  return (
    <li key={id}>
      <p>{content}</p>
      <ul>
        {comments.map((comment) => {
          return (
            <Comment
              commentId={comment.commentId}
              comment={comment.comment}
              author={comment.author}
            ></Comment>
          );
        })}
      </ul>
    </li>
  );
}

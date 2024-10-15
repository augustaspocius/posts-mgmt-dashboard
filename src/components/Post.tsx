import { Comment } from "./Comment.tsx";
import { PostType } from "../types.tsx";

export function Post({ id, userid, title, body, comments }: PostType) {
  return (
    <div user-id={userid} className="post m-4 rounded-md bg-blue-200 p-4">
      <div className="post__content flex w-full flex-wrap items-center justify-between gap-2 lg:flex-nowrap">
        <div className="flex flex-col items-start justify-between">
          <h4 className="post__heading text-left font-semibold">{title}</h4>
          <p className="post__body text-left">{body}</p>
        </div>
        <button
          className="post__remove border-1 w-full rounded-md border border-black bg-white px-4 py-2 outline-1 lg:w-auto"
          onClick={() => {
            // remove post
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
              method: "DELETE",
            });
          }}
          type="button"
        >
          Remove
        </button>
      </div>
      <div className="post__comments">
        {comments.map((comment) => {
          return <Comment key={comment.id} {...comment}></Comment>;
        })}
      </div>
    </div>
  );
}

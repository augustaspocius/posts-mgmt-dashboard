import { CommentType } from "../types.tsx";

export function Comment({ id, name, email, body }: CommentType) {
  return (
    <div key={id} className="comment m-4 bg-green-200 p-4">
      <p className="comment__author wrap break-before-all text-wrap break-words text-left text-xl font-semibold">
        {name} ({email})
      </p>
      <p className="comment__body text-left text-lg">{body}</p>
    </div>
  );
}

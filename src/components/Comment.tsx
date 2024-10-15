import { CommentType } from "../types.tsx";

export function Comment({ id, name, email, body }: CommentType) {
  return (
    <li key={id} className="m-4 bg-green-50 p-4">
      <p className="text-lg">{body}</p>
      <p className="text-sm italic">
        by {name} ({email})
      </p>
    </li>
  );
}

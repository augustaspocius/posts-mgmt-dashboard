import { CommentType } from "../types.tsx";

export function Comment({ id, name, email, body }: CommentType) {
  return (
    <li key={id}>
      <p className="text-lg">{body}</p>
      <p className="text-sm italic">
        by {name} ({email})
      </p>
    </li>
  );
}

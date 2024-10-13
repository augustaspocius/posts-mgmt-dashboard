export type CommentType = {
  commentId: string;
  comment: string;
  author: string;
};

export function Comment({ commentId, comment, author }: CommentType) {
  return (
    <li key={commentId}>
      <p className="text-lg">{comment}</p>
      <p className="text-sm italic">by {author}</p>
    </li>
  );
}

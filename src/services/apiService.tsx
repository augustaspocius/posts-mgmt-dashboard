import { CommentType, PostType, UserType } from "../types.tsx";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUsersData({
  queryKey,
}: {
  queryKey: (string | number | undefined)[];
}): Promise<UserType[]> {
  const id = queryKey[1];
  const limit = queryKey[2];
  const response = await fetch(
    `${BASE_URL}/users` +
      (id ? `/${id}` : "") +
      (limit ? "?_limit=" + `${limit}` : ""),
  );

  if (!response.ok) {
    throw new Error(`${BASE_URL}/users is not ok`);
  }

  const users = await response.json();

  console.log(users);

  return await Promise.all(
    users.map(async (user: UserType) => {
      const posts = await getUserPosts(user.id);

      const postsWithComments = await Promise.all(
        posts.map(async (post) => {
          const comments = await getPostComments(post.id);

          return {
            ...post,
            comments: comments,
          };
        }),
      );

      return {
        name: user.name,
        username: user.username,
        email: user.email,
        posts: postsWithComments,
      };
    }),
  );
}

export async function getUserPosts(userId: number): Promise<PostType[]> {
  const response = await fetch(`${BASE_URL}/users/${userId}/posts?_limit=3`);

  if (!response.ok) {
    throw new Error(`${BASE_URL}/users/${userId}/posts is not ok`);
  }

  return response.json();
}

export async function getPostComments(postId: number): Promise<CommentType[]> {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments?_limit=4`);

  if (!response.ok) {
    throw new Error(`${BASE_URL}/posts/${postId}/comments is not ok`);
  }

  return response.json();
}

// export async function addUserPost(userId: number): Promise<User> {}

// export async function deleteUserPost(userId: number): Promise<User> {}

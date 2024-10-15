import { Post } from "./Post.tsx";
import { UserType } from "../types.tsx";
// import { addUserPost } from "../services/apiService.tsx";
import { useState } from "react";

export default function User({ id, name, posts }: UserType) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="user m-4 rounded-lg bg-purple-200 p-4">
      <div className="user__content flex w-full items-center justify-between">
        <h2 className="user__heading text-left">{name} posts: </h2>
        <button
          className="user__add border-1 rounded-md border border-black bg-white px-4 py-2 outline-1"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          type="button"
        >
          Add
        </button>
      </div>
      {isEditing && (
        <form
          className="user__add-form my-1 flex w-full flex-col flex-wrap items-center justify-between rounded-md bg-yellow-100 p-2 outline-1"
          onSubmit={() => {
            setIsEditing(false);
          }}
        >
          <label htmlFor="post-title">Title:</label>
          <input
            id="post-title"
            name="title"
            className="border-1 my-4 w-full rounded-md border border-black bg-white px-4 py-2 outline-1"
          ></input>
          <label htmlFor="post-body">Body:</label>
          <textarea
            id="post-body"
            name="body"
            className="border-1 my-4 w-full rounded-md border border-black bg-white px-4 py-2 outline-1"
          ></textarea>
          <button
            className="user__add border-1 rounded-md border border-black bg-white px-4 py-2 outline-1"
            type="submit"
          >
            Submit post
          </button>
        </form>
      )}
      <div className="user__posts" key={id}>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              userid={post.userid}
              title={post.title}
              body={post.body}
              comments={post.comments}
            />
          );
        })}
      </div>
    </div>
  );
}

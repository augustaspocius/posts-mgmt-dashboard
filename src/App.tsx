import "./App.css";
import User from "./components/User.tsx";

function App() {
  const mockUsers = [
    {
      userId: 7895245,
      name: "John Doe",
      posts: [
        {
          id: "1",
          content: "testing user post 1",
          comments: [
            {
              commentId: "4654",
              comment: "this is a comment 1",
              author: "Jake",
            },
            {
              commentId: "4655",
              comment: "this is a comment 2",
              author: "Paulyne",
            },
          ],
        },
        {
          id: "2",
          content: "testing user post 2",
          comments: [
            {
              commentId: "4234",
              comment: "this is a comment 1",
              author: "Jeremy",
            },
            {
              commentId: "4251",
              comment: "this is a comment 2",
              author: "Joselyn",
            },
          ],
        },
      ],
    },
    {
      userId: 48745,
      name: "Jane Doe",
      posts: [
        {
          id: "1",
          content: "testing user post 1",
          comments: [
            {
              commentId: "4654",
              comment: "this is a comment 1",
              author: "Jake",
            },
            {
              commentId: "4655",
              comment: "this is a comment 2",
              author: "Paulyne",
            },
          ],
        },
        {
          id: "2",
          content: "testing user post 2",
          comments: [
            {
              commentId: "4234",
              comment: "this is a comment 1",
              author: "Jeremy",
            },
            {
              commentId: "4251",
              comment: "this is a comment 2",
              author: "Joselyn",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="container mx-auto">
      <ul>
        {mockUsers.map((user) => {
          return <User name={user.name} posts={user.posts}></User>;
        })}
      </ul>
    </div>
  );
}

export default App;

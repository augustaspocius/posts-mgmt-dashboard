import "./App.css";
import User from "./components/User.tsx";
import { useQuery } from "@tanstack/react-query";
import { getUsersData } from "./services/apiService.tsx";

function App() {
  const results = useQuery({
    queryKey: ["users", undefined, 2],
    queryFn: getUsersData,
  });

  if (results.isLoading) {
    return <p>LOADING...</p>;
  }

  const users = results.data;
  return (
    <div className="container mx-auto">
      <ul>
        {users?.map((user) => {
          return <User id={user.id} name={user.name} posts={user.posts}></User>;
        })}
      </ul>
    </div>
  );
}

export default App;

import "./App.css";
import User from "./components/User.tsx";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getUsersData } from "./services/apiService.tsx";

function App() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: async ({ pageParam = 1 }) => {
      return await getUsersData({
        queryKey: ["users", undefined, pageParam, 1],
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  if (status === "pending") {
    <p>Loading...</p>;
  } else if (status === "error") {
    <p>Error: {error.message}</p>;
  } else {
    return (
      <div className="container mx-auto">
        {data.pages.map((group, i) => (
          <ul key={i}>
            {group.map((user) => (
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                posts={user.posts}
              ></User>
            ))}
          </ul>
        ))}
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
              ? "Load More"
              : "No More Users"}
        </button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    );
  }
}

export default App;

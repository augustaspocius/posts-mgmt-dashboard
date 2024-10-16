
# Posts Management Dashboard project

A short demo project to showcase users and their posts/comments. This project uses mock [JSON API](https://jsonplaceholder.typicode.com/) to fill users, posts and comments. You can freely add or remove user posts



## Run Locally

Clone the project

```bash
  git clone https://github.com/augustaspocius/posts-mgmt-dashboard
```

Go to the project directory

```bash
  cd posts-mgmt-dashboard
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```

Build production

```bash
  npm run build
```

Run ESlint & Prettier:

```bash
  npm run lint
  npm run format
```


## UI development

This project uses Tailwind utility classes for quick prototyping and ease of use. It is more of a personal preference since with Tailwind you can quickly style components and can extend and change freely.

Also this project uses BEM methodology for easier refactoring in the future and readability



## Further improvement considerations

Since this is a small project done in small amount of time here are few improvements that can be done:

- This project uses React Query with infinite loading, consider adding this infinite loading to posts and comments as well
- Refactor this project to use [RTK query](https://redux-toolkit.js.org/rtk-query/overview), but remember to retain infinite loading logic ([example to consider](https://medium.com/@mandliyarajendra1/how-to-implement-infinite-scroll-in-react-using-redux-toolkit-query-29c408dac7cf))
- Extract button to separate component with default classes and modifiers
- Add missing unit/integration/e2e tests to the project
- Change colors and layout to something nicer
- Add nicer loading animations
- Add loading skeletons using React Suspense
- Add confirmation dialog for removing posts
- Consider adding a comment section to add comments
- Include a profile picture for each profile and comment
- Implement dark mode switcher
- Consider migrating to fullstack framework like (Next.js) for user authentication features and saving users/posts/comments to a database (postgresql)
- Add login/registration sreen to post as a separate user
- Include date when the post was posted
- Add like/reaction buttons
- Add share button to copy into clipboard the link to post
- Create User details page to list show more user information
## Feedback
If you have any feedback, please post an issue or reach out to augustas@pocius.lt


import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/Login/LoginPage";
import HomePage from "../Pages/Home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "home", element: <HomePage /> },
      // { path: "task/:value", element: <TaskPage /> },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/root/Root";
import ErrorPage from "./pages/error-page/ErrorPage";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  }
]);

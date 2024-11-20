import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "@pages/errorPage"
import RootPage from "@pages/rootPage"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: []
  }
])

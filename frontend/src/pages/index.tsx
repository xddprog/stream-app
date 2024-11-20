import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "@pages/errorPage"
import RootPage from "@pages/rootPage"
import { lazy } from "react"
import { ERoutesNames } from "./routes"

const MainPage = lazy(() => import("@pages/mainPage"))

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ERoutesNames.MAIN_PAGE,
        element: <MainPage />
      }
    ]
  }
])

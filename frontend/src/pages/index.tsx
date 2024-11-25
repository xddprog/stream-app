import { createBrowserRouter, Navigate } from "react-router-dom"
import ErrorPage from "@pages/errorPage"
import RootPage from "@pages/rootPage"
import { lazy, Suspense } from "react"
import { ERoutesNames, routesWithHoc } from "./routes"
import { privatePage } from "@entities/viewer/libs/hoc/privatePage"
import { publicPage } from "@entities/viewer/libs/hoc/publicPage"

const BrowsePage = lazy(() => import("@pages/browsePage"))
const LiveChanelPage = lazy(() => import("@pages/browsePage/ui/liveChanelPage"))
const LiveChanelDetailPage = lazy(
  () => import("@pages/browsePage/ui/liveChanelPage/ui/liveChanelDetailPage")
)
const CategoriesPage = lazy(() => import("@pages/browsePage/ui/categoriesPage"))
const AuthPage = lazy(() => import("@pages/authPage"))
const RegisterPage = lazy(() => import("@pages/authPage/ui/registerPage"))
const LoginPage = lazy(() => import("@pages/authPage/ui/loginPage"))

export const routes = createBrowserRouter([
  {
    path: ERoutesNames.DEFAULT,
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      ...routesWithHoc(privatePage, [
        {
          path: ERoutesNames.DEFAULT,
          element: <div>Main</div>
        },
        {
          path: ERoutesNames.BROWSE_PAGE,
          element: <BrowsePage />,
          children: [
            {
              path: "",
              element: <Navigate to={ERoutesNames.LIVE_CHANEL_PAGE} replace />
            },
            {
              path: ERoutesNames.LIVE_CHANEL_PAGE,
              element: <LiveChanelPage />
            },
            {
              path: ERoutesNames.CATEGORIES_PAGE,
              element: <CategoriesPage />
            }
          ]
        },
        {
          path: ERoutesNames.OBSERVE_PAGE,
          element: <div>observe</div>
        },
        {
          path: ERoutesNames.LIVE_CHANEL_DETAILS_PAGE,
          element: <LiveChanelDetailPage />
        }
      ])
    ]
  },
  {
    path: ERoutesNames.AUTH_PAGE,
    element: (
      <Suspense fallback={<div className="bg-black h-screen w-full">Loading..</div>}>
        <AuthPage />
      </Suspense>
    ),
    children: [
      ...routesWithHoc(publicPage, [
        {
          path: "",
          element: <Navigate to={ERoutesNames.LOGIN_PAGE} replace />
        },
        {
          path: ERoutesNames.LOGIN_PAGE,
          element: <LoginPage />
        },
        {
          path: ERoutesNames.REGISTER_PAGE,
          element: <RegisterPage />
        }
      ])
    ]
  }
])

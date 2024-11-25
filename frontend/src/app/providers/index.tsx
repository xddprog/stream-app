import { FC, PropsWithChildren } from "react"
import { RouterProvider } from "react-router-dom"
import { routes } from "@pages/index"
import { Provider } from "react-redux"
import { store } from "@app/store"
import { ViewerProvider } from "@entities/viewer"

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <ViewerProvider>
        <RouterProvider router={routes} />
        {children}
      </ViewerProvider>
    </Provider>
  )
}

export default Providers

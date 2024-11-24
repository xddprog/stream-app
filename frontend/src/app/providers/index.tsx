import { FC, PropsWithChildren } from "react"
import { RouterProvider } from "react-router-dom"
import { routes } from "@pages/index"
import { Provider } from "react-redux"
import { store } from "@app/store"

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
      {children}
    </Provider>
  )
}

export default Providers

import { FC, PropsWithChildren } from "react"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import { routes } from "@pages/index"

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={routes} />
      {children}
    </ChakraProvider>
  )
}

export default Providers

import { Flex, Spinner } from "@chakra-ui/react"
import Header from "@widgets/header/ui/header"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

const RootPage = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex="1">
        <div className="border">sidebar</div>
        <Suspense
          fallback={
            <Flex justify="center" align="center" minH="100vh">
              <Spinner size="xl" />
            </Flex>
          }
        >
          <div className="flex-grow">
            <Outlet />
          </div>
        </Suspense>
      </Flex>
      <footer className="border">footer</footer>
    </Flex>
  )
}

export default RootPage

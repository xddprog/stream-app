import { Flex, Text } from "@chakra-ui/react"

import { useRouteError } from "react-router-dom"
import { getErrorMessage } from "../lib/getErrorMesage"

const ErrorPage = () => {
  const error = useRouteError()
  const errorMessage = getErrorMessage(error)
  return (
    <Flex direction="column" align="center" justify="center" h="100vh" w="100vw">
      <Text as="h1" fontSize="xx-large">
        Oops!
      </Text>
      <Text fontSize="xx-large">Sorry, error vim</Text>
      <Text fontSize="xx-large">
        <Text as="i" fontSize="xx-large">
          {errorMessage}
        </Text>
      </Text>
    </Flex>
  )
}

export default ErrorPage

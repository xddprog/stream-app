import { Box, Flex, Text, Button } from "@chakra-ui/react"
import { IconTypes } from "@shared/ui/icon/lib"
import { Icon } from "@shared/ui/icon/ui/icon"

const Header = () => {
  return (
    <Box bg="gray.900" color="white" p={4} boxShadow="md">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Icon type={IconTypes.TWITCH_OUTLINED} />

          <Text fontSize="xl" fontWeight="bold" ml={2}>
            Twitch
          </Text>
        </Flex>

        <Flex as="form" borderRadius="md" bg="gray.800" p={2} width="400px" align="center">
          <input
            type="text"
            placeholder="Search"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "white",
              marginLeft: "8px",
              width: "100%"
            }}
          />
        </Flex>

        <Flex align="center">
          <Button variant="outline" color="white" marginRight={4}></Button>
          <Button variant="outline" color="white" marginRight={4}></Button>
          <Button variant="solid" colorScheme="purple" size="sm">
            Sign In
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header

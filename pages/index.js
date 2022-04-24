import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
        Hello, I&apos;m a developer based in Japan!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            K Hoshi
          </Heading>
          <p>Digital Craftzman ( Developer )</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="https://cdn.hinatazaka46.com/files/14/diary/official/member/moblog/202204/mobl53w0c.jpg" alt="Profile Image" />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
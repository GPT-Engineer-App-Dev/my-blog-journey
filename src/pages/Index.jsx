import { Container, Text, VStack, Heading, Box, Image, Link, HStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="lg">Sharing my thoughts and experiences on web development, technology, and life.</Text>
        </Box>
        <Box>
          <Image borderRadius="md" src="/images/blog-header.jpg" alt="Blog Header" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Understanding React Hooks</Heading>
              <Text mt={4}>An in-depth look at how to use React Hooks effectively in your projects.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">A Guide to Chakra UI</Heading>
              <Text mt={4}>Learn how to build beautiful and accessible UIs with Chakra UI.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">JavaScript ES2021 Features</Heading>
              <Text mt={4}>Explore the new features introduced in ES2021 and how to use them.</Text>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>Follow Me</Heading>
          <HStack spacing={4} justify="center">
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
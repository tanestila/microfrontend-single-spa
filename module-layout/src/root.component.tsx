import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  ChakraProvider,
  Link as ChakraLink,
  Flex,
  Heading,
  Container,
} from "@chakra-ui/react";

export default function Root(props) {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Heading>Welcome to React Router!</Heading>
        <Flex style={{ marginTop: "16px" }}>
          <Flex
            direction="column"
            style={{ width: "100px", background: "lightblue" }}
          >
            <ChakraLink as={Link} to="/">
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/about">
              About
            </ChakraLink>
            <ChakraLink as={Link} to="/todo">
              Todo
            </ChakraLink>
          </Flex>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="todo" element={<Todo />} />
            </Routes>
          </Container>
        </Flex>
      </ChakraProvider>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
    </>
  );
}

function Todo() {
  return (
    <>
      <div>
        <h2>Todo</h2>
        <div id="todo-container"></div>
      </div>
    </>
  );
}

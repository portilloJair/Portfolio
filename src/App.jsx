import {
  Box,
  Center,
  Container,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import "./App.css";

import Navegation from "./Components/Navegation";
import Scene from "./Components/Scene";
import Resume from "./Components/Resume";
import Knowledge from "./Components/Knowledge";
import Project from "./Components/Project";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <>
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
      <VStack m={0}>
        <Container
          w={{ lg: "40rem", md: "100%", sm: "100%", base: "100%" }}
          // h={"100%"}
        >
          <Navegation></Navegation>
          <Scene></Scene>
          <Resume></Resume>
          <Knowledge></Knowledge>
          <Project></Project>
        </Container>
        
      </VStack>

      <Center p={5} mt="auto" fontSize={".6rem"} opacity=".5">
        {" "}
        © { new Date().getFullYear() } Portillo Jair. All Rights Reserved.{" "}
      </Center>
      
    </>
  );
}

export default App;

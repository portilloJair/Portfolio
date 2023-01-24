import {
  Box,
  Center,
  Flex,
  Image,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import reactlogo from "../assets/icons/react-icon.png";
import javalogo from "../assets/icons/java-icon.png";
import tomcatlogo from "../assets/icons/tomcat-icon.png";

export default function Knowledge() {
  return (
    <>
      <VStack
        mx={"auto"}
        mt={"1rem"}
        w={{ lg: "40rem", md: "75%", sm: "80%", base: "90%" }}
        // h={{ lg: "50%", md: "50%", sm: "50%", base: "50%" }}
        // bgColor={"black"}
        spacing={0}
        align="flex-start"
      >
        <Box fontSize={".8rem"} color="#489BE9" w={"100%"}>
          KNOWLEDGE
        </Box>
        <Box bgColor={"#489BE9"} w={"5.5rem"} h={".5rem"} rounded="lg"></Box>
        <Box width={"100%"} h="100%" pt={3}>
          <Wrap
            spacing="10px"
            p={4}
            bgColor={"#489BE9"}
            rounded="lg"
            justify={"center"}
          >
            <Card logo="devicon-java-plain" text="Java" />
            <Card logo="devicon-spring-plain" text="Spring" />
            <Card logo="devicon-angularjs-plain" text="Angular" />
            <Card logo="devicon-react-plain" text="React" />
            <Card logo="devicon-html5-plain" text="HTML5" />
            <Card logo="devicon-css3-plain" text="CSS3" />
            <Card logo="devicon-javascript-plain" text="JavaScript" />
            <Card logo="devicon-bootstrap-plain" text="Bootstrap" />
            <Card logo="devicon-jquery-plain" text="Jquery" />
            <Card logo="devicon-git-plain" text="Git" />
            <Card logo="devicon-mysql-plain" text="Mysql" />
          </Wrap>
        </Box>
      </VStack>
    </>
  );

  function Card({ logo, text }) {
    return (
      <WrapItem className="hola">
        <Flex
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          w="100px"
          h="130px"
          bgColor={"white"}
          boxShadow="lg"
          p={2}
          rounded="md"
          color={"#489BE9"}
          transition="all .1s"
          _hover={{
            transform: "scale(1.1)",
            bgColor: "#70baff",
            color: "#fff",
          }}
        >
          <Box w={"80%"} className={logo} fontSize={"2.5rem"} align="center">
            {/* <Image src={logo} /> */}
          </Box>
          <Box mt={"10px"} fontSize={".7rem"} align="center">
            {" "}
            {text}{" "}
          </Box>
        </Flex>
      </WrapItem>
    );
  }
}

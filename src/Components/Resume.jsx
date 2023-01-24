import { Box, Link, VStack } from "@chakra-ui/react";

export default function Resume() {
  return (
    <>
      <VStack
        mx={"auto"}
        w={{ lg: "40rem", md: "75%", sm: "80%", base: "90%" }}
        // h={{ lg: "50%", md: "50%", sm: "50%", base: "50%" }}
        // bgColor={"black"}
        spacing={0}
        align="flex-start"
      >
        <Box fontSize={".8rem"} color="#489BE9" w={"100%"}>
          RESUME
        </Box>
        <Box bgColor={"#489BE9"} w={"3.6rem"} h={".5rem"} rounded="lg"></Box>
        <Box width={"100%"} h="100%" fontSize={".65rem"} py={3} opacity=".9">
          {" "}
          Computer and Information Technology Technician with a solid background
          in Java development and related tools. With knowledge in creating easy
          to use and high performance web applications. Highly adaptable,
          self-taught continuous and enjoy working both as a team member and as
          an individual.{" "}
        </Box>
        <Link
          href="https://drive.google.com/file/d/1wpCi05m-ZaQYPhxhBGtUKG9ivioSU759/view?usp=share_link"
          bgColor={"#489BE9"}
          color="white"
          px={4}
          py={1}
          rounded="sm"
          fontSize={".8rem"}
          isExternal
        >
          {/* <ImageItem logo={mailogo}></ImageItem> */}
          Download CV
        </Link>
      </VStack>
    </>
  );
}

import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  MenuButton,
  Image,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  HStack,
  Flex,
  IconButton,
} from "@chakra-ui/react";

export default function Navegation() {
  return (
    <Flex
      w={{ lg: "40rem", md: "75%", sm: "80%", base: "90%" }}
      h={{ lg: "3rem", md: "3rem", sm: "3rem", base: "3rem" }}
      justifyContent="space-between"
      alignItems="center"
      px={2}
      rounded={"md"}
      mt={3}
      mx="auto"
      style={{ border: "2px solid #489BE9" }}
    >
      <Logo />

      <Burger />

      <Nav />
    </Flex>
  );

  //

  function Logo() {
    return (
      <Box>
        <Image
          _hover={{ animation: "rotation 2s infinite linear" }}
          src="https://thekrishna.in/v1/assets/img/icons/World.png"
          boxSize="2rem"
        ></Image>
      </Box>
    );
  }

  function Burger() {
    return (
      <Box mr={6} display={{ base: "block", sm: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList
            rounded={"md"}
            bgColor={"#ffffff"}
            fontSize={".7rem"}
            color="rgba(0,0,0,.8)"
            p={2}
            style={{ border: "2px solid #489BE9" }}
          >
            <MenuItem icon={<ChevronRightIcon />}>Resume</MenuItem>
            <MenuDivider />
            <MenuItem icon={<ChevronRightIcon />}>Knowledge</MenuItem>
            <MenuDivider />
            <MenuItem icon={<ChevronRightIcon />}>Projects</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  }

  function NavLink({ name }) {
    return (
      <Link
        rounded={"2px"}
        p={1}
        transition="all .1s"
        _hover={{
          bgColor: "#489BE9",
          color: "#ffffff",
          cursor: "pointer",
          transform: "scale(1.1)",
        }}
      >
        {name}
      </Link>
    );
  }

  function Nav() {
    return (
      <Box display={{ base: "none", sm: "block" }}>
        <HStack spacing={1.5} fontSize="10px">
          <NavLink name="Resume" />
          <NavLink name="Knowledge" />
          {/* <NavLink name="Projects" /> */}
        </HStack>
      </Box>
    );
  }

  //
}

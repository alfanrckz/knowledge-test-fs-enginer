import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { RiApps2AddLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { SiDatabricks } from "react-icons/si";
import { MdOutlineAccountCircle } from "react-icons/md";
export default function SideBar() {
  // const profile = useSelector((state: RootState) => state.profile);
  // console.log("ini profile",profile);
  const handleLogout = () => {
    const response =localStorage.removeItem("token");
    console.log("ini response auth data",response)
    window.location.href = "/login";
  };

  const userName = localStorage.getItem("name");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        size="lg"
        onClick={onOpen}
        bg={"#242424"}
        color={"white"}
        _hover={{ bg: "gray.900" }}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={"black"}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex gap={3} ml={4}>
              <Heading color="green">Home</Heading>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <UnorderedList ml={7} my={4} style={{ listStyleType: "none" }}>
              <ListItem my={2}>
                <Flex>
                  <Center>
                    <Text fontSize={"2xl"}>
                      <IoMdHome />
                    </Text>
                    <NavLink
                      to={"/"}
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isActive ? "green" : "",

                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      <Text
                        pl={2}
                        _hover={{
                          textDecoration: "none",
                          fontWeight: "bold",
                          color: "green.500",
                        }}
                      >
                        HOME
                      </Text>
                    </NavLink>
                  </Center>
                </Flex>
              </ListItem>

              <ListItem my={2} mt={5}>
                <Flex>
                  <Center>
                    <Text fontSize={"2xl"}>
                      <RiApps2AddLine />
                    </Text>
                    <NavLink
                      to={"/add-product"}
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isActive ? "green" : "",

                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      <Text
                        pl={2}
                        _hover={{
                          textDecoration: "none",
                          fontWeight: "bold",
                          color: "green.500",
                        }}
                      >
                        ADD PRODUCT
                      </Text>
                    </NavLink>
                  </Center>
                </Flex>
              </ListItem>
              <ListItem my={2} mt={5}>
                <Flex>
                  <Center>
                    <Text fontSize={23}>
                    <SiDatabricks />
                    </Text>
                    <NavLink
                      to={"/my-product"}
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isActive ? "green" : "",

                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      <Text
                        pl={2}
                        _hover={{
                          textDecoration: "none",
                          fontWeight: "bold",
                          color: "green.500",
                        }}
                      >
                        MY PRODUCT
                      </Text>
                    </NavLink>
                  </Center>
                </Flex>
              </ListItem>
              <ListItem my={2} mt={5}>
                <Flex>
                  <Center>
                    <Text fontSize={24}>
                    <MdOutlineAccountCircle />
                    </Text>
                    <NavLink
                      to={"/my-profile"}
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isActive ? "green" : "",

                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      <Text
                        pl={2}
                        _hover={{
                          textDecoration: "none",
                          fontWeight: "bold",
                          color: "green.500",
                        }}
                      >
                        MY PROFILE
                      </Text>
                    </NavLink>
                  </Center>
                </Flex>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
          <WrapItem ml={14} mb={-5}>
              <Avatar name="Dan Abrahmov" src="https://c8.alamy.com/comp/2RXGYGG/human-man-head-with-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-2RXGYGG.jpg" />
              <Text ml={2} mt={3} textTransform="capitalize">{userName}</Text>
            </WrapItem>
          <DrawerFooter
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={handleLogout}
            cursor="pointer"
            _hover={{ fontWeight: "bold", color: "red" }}
          >
            
            <Box ml={2}>
              <CiLogout />
            </Box>
            <Text>Logout</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

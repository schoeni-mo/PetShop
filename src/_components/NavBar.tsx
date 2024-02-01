import {Flex, Heading} from "@chakra-ui/react";

const NavBar = () => {
    return (
        <Flex as={"nav"} align={"center"} wrap={"wrap"} bgColor={"grey"} padding={5} color={"dark-grey"}>
            <Heading>PetShop - Htl Kaindorf</Heading>
        </Flex>
    );
};

export default NavBar;
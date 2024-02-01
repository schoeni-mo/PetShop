import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Image,
    Tag,
    Text,
} from "@chakra-ui/react";
import {IPet} from "../_common/model.ts";
import {useContext} from "react";
import {SelectedPetContext} from "../_context/SelectedPetContext.tsx";
import {useNavigate} from "react-router-dom";

interface Props {
    pet : IPet
}

const PetCard = ({pet} : Props) => {

    const [,setPet] = useContext(SelectedPetContext);
    const navigate = useNavigate();


    const updatePet = (pet : IPet) => {
        setPet(pet);
        navigate("/update");
    }

    return (
        <Card borderRadius={"lg"} borderWidth="1px" overflow="hidden" maxW="md">
            <CardHeader>
                <Flex>
                    <Text fontWeight={"bold"} fontSize={"30px"}>{pet.name}</Text>
                    <Button ms={10} mt={1} onClick={() => updatePet(pet)}>update</Button>
                </Flex>
                <Image src={pet.picture}/>
            </CardHeader>
            <CardBody>
                {pet.dateOfBirth}
                <Tag ms={4}>{pet.gender}</Tag>
                <Tag ms={2}>{pet.chip.type}</Tag>
                <Tag ms={2} bgColor={"teal"} color={"white"}>{pet.type}</Tag>
            </CardBody>
        </Card>
    );
};

export default PetCard;
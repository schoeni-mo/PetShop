import {useContext} from "react";
import {SelectedPetContext} from "../_context/SelectedPetContext.tsx";
import {Button, FormLabel, Heading, Input, Stack} from "@chakra-ui/react";
import {FieldValues, useForm} from "react-hook-form";
import {IPet} from "../_common/model.ts";
import apiClient from "../_services/api-client.ts";
import {useNavigate} from "react-router-dom";

const PetsForm = () => {


    const [pet] = useContext(SelectedPetContext);

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data : FieldValues) => {
        const neuesPet : IPet = {
            petId: pet.petId,
            name: data.name,
            gender: pet.gender,
            dateOfBirth: pet.dateOfBirth,
            picture: pet.picture,
            type: data.type,
            chip: pet.chip
        }

        apiClient.patch('/pet/'+pet.petId, neuesPet)
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} ms={500} me={500} mt={100}>
                <Heading textAlign={"center"}>Editing Pet: {pet.name}</Heading>
                <FormLabel htmlFor={"name"}>Name</FormLabel>
                <Input {...register('name')}
                    id={"name"} type={"text"} defaultValue={pet.name}></Input>
                <FormLabel htmlFor={"type"}>Type</FormLabel>
                <Input {...register('type')}
                    id={"type"} type={"text"} defaultValue={pet.type}></Input>
                <Button type={"submit"}>Submit</Button>
            </Stack>
        </form>
    );
};

export default PetsForm;
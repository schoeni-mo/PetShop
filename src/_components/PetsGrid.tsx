import {usePets} from "../_hooks/usePets.ts";
import {
    Button,
    Flex, Menu, MenuButton, MenuItem, MenuList,
    SimpleGrid,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Tag,
    Text
} from "@chakra-ui/react";
import PetCard from "./PetCard.tsx";
import {useContext} from "react";
import {PageContext} from "../_context/PageContext.tsx";
import {TypeContext} from "../_context/TypeContext.tsx";
import useTypes from "../_hooks/useTypes.ts";

const PetsGrid = () => {

    const [page, setPage] = useContext(PageContext);
    const [type, setType] = useContext(TypeContext);

    const {types, err} = useTypes();

    const {pets, error} = usePets(type, page.pageNo, page.pageSize);


    const changePage = (pageNo : number, pageSize: number) => {

        if ( pageNo < 0) {
            pageNo = 0;
        }

        if ( pageNo == 0 && pageSize != 0) {
            setPage({pageNo: page.pageNo, pageSize: pageSize});
        } else if (pageSize == 0 && pageNo != 0 || pageSize == 0 && pageNo == 0) {
            setPage({pageNo: pageNo, pageSize: page.pageSize});
        }
    }

    const changeSlider = (size : number) => {
        changePage(0, size);
    }

    return (
        <>
            <Flex mt={3}>
                <Slider width={"300px"} ms={5} min={1} max={10} defaultValue={6} onChange={changeSlider}>
                    <SliderTrack>
                        <SliderFilledTrack/>
                    </SliderTrack>
                    <SliderThumb/>
                </Slider>
                <Tag ms={5} me={5}>{page.pageSize}</Tag>
                <Button padding={2} size={"7"} onClick={() => changePage(page.pageNo -1, 0)}>←</Button>
                <Text padding={2} size={"7"}>{page.pageNo}</Text>
                <Button padding={2} size={"7"} onClick={() => changePage(page.pageNo +1, 0)} me={15}>→</Button>
                <Menu>
                    <MenuButton as={Button} bgColor={"grey"} color={"white"}>{type}</MenuButton>
                    <MenuList>
                        {types.map(t => <MenuItem onClick={() => setType(t)}>{t}</MenuItem>)}
                    </MenuList>
                </Menu>
            </Flex>
            {err && <Text>{err}</Text>}
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={[2, 3, 4]} spacing={4} mt={4} ms={4}>
                {pets.map(p => <PetCard pet={p}/>)}
            </SimpleGrid>
        </>

    );
};

export default PetsGrid;
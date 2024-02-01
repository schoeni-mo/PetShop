import {ReactNode, useState} from "react";
import {IPet} from "../_common/model.ts";
import {SelectedPetContext} from "./SelectedPetContext.tsx";

interface Props {
    children : ReactNode
}
const SelectedPetContextProvider = ({children} : Props) => {

    const [pet, setPet] = useState<IPet>({} as IPet);

    return (
        <SelectedPetContext.Provider value={[pet, setPet]}>
            {children}
        </SelectedPetContext.Provider>
    );
};

export default SelectedPetContextProvider;
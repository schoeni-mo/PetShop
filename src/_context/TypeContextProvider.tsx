import {ReactNode, useState} from "react";
import {TypeContext} from "./TypeContext.tsx";

interface Props {
    children : ReactNode
}



const TypeContextProvider = ({children}: Props) => {
    const [type, setType] = useState<string>("Cat");
    return (
        <TypeContext.Provider value={[type, setType]}>
            {children}
        </TypeContext.Provider>
    );
};

export default TypeContextProvider;
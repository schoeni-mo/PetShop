import {createContext} from "react";


export const TypeContext = createContext<[string, (type : string) => void]>(["Cat", () => null])
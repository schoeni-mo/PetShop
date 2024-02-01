import {createContext} from "react";
import {IPet} from "../_common/model.ts";




export const SelectedPetContext = createContext<[IPet, (pet : IPet) => void]>([{} as IPet, () => null])
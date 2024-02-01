import {createContext} from "react";
import {IPage} from "../_common/model.ts";


export const PageContext = createContext<[IPage, (page: IPage) => void]>([{pageNo: 0, pageSize:6}, () => null]);
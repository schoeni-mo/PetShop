import {ReactNode, useState} from "react";
import {PageContext} from "./PageContext.tsx";
import {IPage} from "../_common/model.ts";

interface Props {
    children : ReactNode
}


const PageContextProvider = ({children} : Props) => {

    const [page, setPage] = useState<IPage>({pageNo: 0, pageSize:6});

    return (
        <PageContext.Provider value={[page, setPage]}>
            {children}
        </PageContext.Provider>
    );
};

export default PageContextProvider;
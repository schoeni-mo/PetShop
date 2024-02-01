import {useEffect, useState} from "react";
import {IPet, IResponse} from "../_common/model.ts";
import apiClient from "../_services/api-client.ts";
import {CanceledError} from "axios";


export const usePets = (type : string, pageNo : number, pageSize: number) => {

    const [pets, setPets] = useState<IPet[]>([]);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<IResponse>('/pets', {signal : controller.signal, params: {type : type, pageNo: pageNo, pageSize: pageSize}})
            .then(res => {
                setPets(res.data.content);
            })
            .catch(err => {
                if ( err instanceof CanceledError) return;
                setError(err);
            })
        return () => controller.abort();
    }, [type, pageNo, pageSize]);

    return {pets, error};

}
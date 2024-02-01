import {useEffect, useState} from "react";
import apiClient from "../_services/api-client.ts";
import {CanceledError} from "axios";

const UseTypes = () => {
    const [types, setTypes] = useState<string[]>([]);
    const [err, setError] = useState<string | undefined>();

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<string[]>('/types', {signal: controller.signal})
            .then(res => {
                setTypes(res.data);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err);
            })
        return () => controller.abort();
    }, []);

    return {types, err};
};

export default UseTypes;
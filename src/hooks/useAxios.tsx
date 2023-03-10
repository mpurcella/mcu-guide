import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (url: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const getData = async () => {
            setError(false);
            setLoading(true);

            try {
                const response = await axios.get(url, { signal });
                setData(response.data);
            } catch (err) {
                console.error(err);
                setError(true);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        getData();

        // useEffect cleanup function
        return () => controller.abort();
    }, []);

    return [data, error, loading];
};

export default useAxios;

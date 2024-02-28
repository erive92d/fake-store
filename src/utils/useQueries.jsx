import { useQuery } from '@tanstack/react-query';

// Custom hook for fetching data
const customQuery = (queryKey, fetchFunction, id = null) => {

    const queryFn = id ? async () => fetchFunction(id) : () => fetchFunction;
    const { data, isLoading } = useQuery({
        queryKey: [queryKey],
        queryFn
    })

    return { data, isLoading }

}

export default customQuery;

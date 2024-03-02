import { useQuery } from '@tanstack/react-query';
import { fetchByCategory } from './API';

// Custom hook for fetching data
const customQuery = (queryKey, fetchFunction, param = null) => {
    // const secondOption = second === id ? id : categoryName
    // console.log(secondOption)
    const queryFn = param ? async () => fetchFunction(param)  : () => fetchFunction;
    const { data, isLoading } = useQuery({
        queryKey: [queryKey],
        queryFn
    })


    return { data, isLoading }

}

export default customQuery;

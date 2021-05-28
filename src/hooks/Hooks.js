import { useQuery } from 'react-query';
import axios from 'axios';


export function useServerRequest(url){
    const { isLoading, error, data, isFetching } = useQuery(
        'repoData', 
        () =>
        axios.get(url).then(res =>
        res.data),
        {
            // refetchOnWindowFocus:false
            // staleTime: 10000 // used to determine when a data should become stale
            // cacheTime: 5000 //used to determine the time a data should be cached
            // enabled: key // query will work if the value defined here is equal to the useQuery key value 
            // retry: 2 // number of times a query should retry if it fails
        }
    )

    return { isLoading, error, data, isFetching }
}
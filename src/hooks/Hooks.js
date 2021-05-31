import { useQuery } from 'react-query';
import axios from 'axios';


export function useServerRequest(keyVal, url, enabledKey){
    const { isLoading, error, data, isFetching } = useQuery(
        keyVal, 
        () =>
        axios.get(url).then(res =>
        res.data[0]),
        {
            // refetchOnWindowFocus:false
            // staleTime: 10000 // used to determine when a data should become stale
            // cacheTime: 5000 //used to determine the time a data should be cached
            // enabled: key // query will work if the value defined here is equal to the useQuery key value 
            // retry: 2 // number of times a query should retry if it fails
            // retryDelay: 1000
            enabled: enabledKey
        }
    )

    return { isLoading, error, data, isFetching }
}
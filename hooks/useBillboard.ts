import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Movie } from "@prisma/client";



const useBillboard = () => {
    const {data, error, isLoading} = useSWR('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data: data as Movie,
        error,
        isLoading,
    };

}

export default useBillboard;
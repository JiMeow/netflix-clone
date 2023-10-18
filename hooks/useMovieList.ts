import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Movie } from "@prisma/client";

const useMoveList = () => {
    const {data, error, isLoading} = useSWR('/api/movies', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data: data as Movie[],
        error,
        isLoading,
    };
}

export default useMoveList;
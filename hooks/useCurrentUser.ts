import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { User } from "@prisma/client";

const useCurrentUser = () => {
    const {data, error, isLoading, mutate} = useSWR('/api/current', fetcher);

    return {
        data: data as User,
        error,
        isLoading,
        mutate
    };
};

export default useCurrentUser;
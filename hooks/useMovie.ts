import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Movie } from '@prisma/client';

const useMovie = (movieId?: string) => {
    const {data, error, isLoading} = useSWR(movieId ? `/api/movies/${movieId}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data: data as Movie,
        error,
        isLoading,
    }
}

export default useMovie;
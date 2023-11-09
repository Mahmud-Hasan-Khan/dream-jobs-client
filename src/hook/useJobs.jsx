import { useQuery } from '@tanstack/react-query'


const useJobs = () => {
    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const data = await fetch('https://dream-jobs-server-psi.vercel.app/jobs');
            return await data.json();
        },
    });
    return { data, isLoading, isFetching, refetch };
};

export default useJobs;
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../lib/data-service";

export function useUserProfile(userId) {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getProfile(userId),
  });

  return { profile, isLoading, error };
}

import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../lib/data-service";

export function useUser() {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  return { isLoading, error, user };
}

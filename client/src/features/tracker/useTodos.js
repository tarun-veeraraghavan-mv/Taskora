import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "../../lib/data-service";

export function useTodos() {
  const {
    data: todos,
    isLoading: isFetchingTodos,
    error: todoError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });

  return { todos, isFetchingTodos, todoError };
}

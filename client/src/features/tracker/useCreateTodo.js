import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo as createTodoApi } from "../../lib/data-service";

export function useCreateTodo() {
  const queryClient = useQueryClient();

  const { mutate: createTodo, isLoading: isCreatingTodo } = useMutation({
    mutationFn: (data) => createTodoApi(data),
    onSuccess: () => {
      alert("Todo was created");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return { createTodo, isCreatingTodo };
}

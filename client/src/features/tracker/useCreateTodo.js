import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo as createTodoApi } from "../../lib/data-service";
import toast from "react-hot-toast";

export function useCreateTodo() {
  const queryClient = useQueryClient();

  const { mutate: createTodo, isLoading: isCreatingTodo } = useMutation({
    mutationFn: (data) => createTodoApi(data),
    onSuccess: () => {
      toast.success("Todo was created");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createTodo, isCreatingTodo };
}

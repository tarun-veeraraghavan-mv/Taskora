import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo as deleteTodoApi } from "../../lib/data-service";

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const { mutate: deletedTodo, isLoading: isDeletingTodo } = useMutation({
    mutationFn: (id) => deleteTodoApi(id),
    onSuccess: () => {
      alert("Todo successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return { deletedTodo, isDeletingTodo };
}

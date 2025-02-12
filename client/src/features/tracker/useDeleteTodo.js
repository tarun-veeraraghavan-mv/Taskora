import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo as deleteTodoApi } from "../../lib/data-service";
import toast from "react-hot-toast";

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const { mutate: deletedTodo, isLoading: isDeletingTodo } = useMutation({
    mutationFn: (id) => deleteTodoApi(id),
    onSuccess: () => {
      toast.success("Todo successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deletedTodo, isDeletingTodo };
}

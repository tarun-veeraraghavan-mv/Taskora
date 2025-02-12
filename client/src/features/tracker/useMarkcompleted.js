import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markTodoCompleted } from "../../lib/data-service";
import toast from "react-hot-toast";

export function useMarkcompleted() {
  const queryClient = useQueryClient();

  const { mutate: markCompleted, isLoading: isMarkingComplete } = useMutation({
    mutationFn: (id) => markTodoCompleted(id),
    onSuccess: () => {
      toast.success("Todo marked complete");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (err, _, context) => {
      toast.error(err.message);
    },
  });

  return { markCompleted, isMarkingComplete };
}

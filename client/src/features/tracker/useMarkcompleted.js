import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markTodoCompleted } from "../../lib/data-service";

export function useMarkcompleted() {
  const queryClient = useQueryClient();

  const { mutate: markCompleted, isLoading: isMarkingComplete } = useMutation({
    mutationFn: (id) => markTodoCompleted(id),
    onSuccess: () => {
      alert("Todo marked complete");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return { markCompleted, isMarkingComplete };
}

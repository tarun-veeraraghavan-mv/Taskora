import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse as deleteCourseApi } from "../../lib/data-service";

export function useDeleteCourse() {
  const queryClient = useQueryClient();

  const { mutate: deleteCourse, isLoading: isDeleting } = useMutation({
    mutationFn: (courseId) => {
      console.log(courseId);
      deleteCourseApi(courseId);
    },
    onSuccess: () => {
      alert("COurse deleted");
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
    onError: (error) => {
      alert(error);
    },
  });

  return { deleteCourse, isDeleting };
}

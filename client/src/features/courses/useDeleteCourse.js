import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse as deleteCourseApi } from "../../lib/data-service";
import toast from "react-hot-toast";

export function useDeleteCourse() {
  const queryClient = useQueryClient();

  const { mutate: deleteCourse, isLoading: isDeleting } = useMutation({
    mutationFn: (courseId) => {
      console.log(courseId);
      deleteCourseApi(courseId);
    },
    onSuccess: () => {
      toast.success("Course deleted");
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { deleteCourse, isDeleting };
}

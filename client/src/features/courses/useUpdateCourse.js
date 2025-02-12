import { useMutation } from "@tanstack/react-query";
import { updateCourse as updateCourseApi } from "../../lib/data-service";
import toast from "react-hot-toast";

export function useUpdateCourse() {
  const { mutate: updateCourse, isLoading: isUpdating } = useMutation({
    mutationFn: ({ courseId, data }) => updateCourseApi(courseId, data),
    onSuccess: () => {
      toast.success("Course successfully updated");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  return { updateCourse, isUpdating };
}

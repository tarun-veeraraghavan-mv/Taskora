import { useMutation } from "@tanstack/react-query";
import { updateCourse as updateCourseApi } from "../../lib/data-service";

export function useUpdateCourse() {
  const { mutate: updateCourse, isLoading: isUpdating } = useMutation({
    mutationFn: ({ courseId, data }) => updateCourseApi(courseId, data),
    onSuccess: () => {
      alert("Course successfully updated");
    },
    onError: (e) => {
      alert(e.message);
    },
  });

  return { updateCourse, isUpdating };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourse as createCourseApi } from "../../lib/data-service";

export function useCreateCourse() {
  const query = useQueryClient();

  const {
    mutate: createCourse,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: (formData) => {
      createCourseApi(formData);
    },
    onSuccess: () => {
      alert("Course created");
      query.invalidateQueries({
        queryKey: ["courses"],
      });
    },
    onError: (error) => {
      alert(error);
    },
  });

  return { createCourse, isCreating, error };
}

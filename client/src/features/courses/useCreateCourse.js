import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourse as createCourseApi } from "../../lib/data-service";
import toast from "react-hot-toast";

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
      query.invalidateQueries({
        queryKey: ["courses"],
      });
      toast.success("Course successfully created");
    },
    onError: (error) => {
      alert(error);
      toast.error(error.message);
    },
  });

  return { createCourse, isCreating, error };
}

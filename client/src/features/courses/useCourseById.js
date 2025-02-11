import { useQuery } from "@tanstack/react-query";
import { getCourseById as getCourseByIdApi } from "../../lib/data-service";

export function useCourseById(id) {
  const {
    data: course,
    isLoading: isFetchingCourse,
    error: fetchCourseError,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: ({ queryKey }) => getCourseByIdApi(queryKey[1]),
  });

  return { course, isFetchingCourse, fetchCourseError };
}

import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../../lib/data-service";

export function useCourses(userId) {
  const {
    data: courses,
    isLoading: isGetCourses,
    error: getCourseError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getAllCourses(userId),
  });

  return { courses, isGetCourses, getCourseError };
}

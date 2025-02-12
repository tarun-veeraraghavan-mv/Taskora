import { useUser } from "../auth/useUser";
import { useCourses } from "./useCourses";

import styled from "styled-components";
import CourseList from "./CourseList";
import { useDeleteCourse } from "./useDeleteCourse";
import LoaderScreen from "../../components/LoaderScreen";

const StyledCourseLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  gap: 32px;
`;

function Course() {
  const { user, isLoading, error: userError } = useUser();
  const { deleteCourse, isDeleting } = useDeleteCourse();
  const { isGetCourses, courses } = useCourses(user?._id);

  if (userError) alert(userError);

  if (isLoading) return <LoaderScreen />;
  if (isGetCourses) return <LoaderScreen />;
  if (isDeleting) return <LoaderScreen />;

  return (
    <StyledCourseLayout>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </StyledCourseLayout>
  );
}

export default Course;

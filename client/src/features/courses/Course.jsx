import { useCreateCourse } from "./useCreateCourse";
import { useUser } from "../auth/useUser";
import { useCourses } from "./useCourses";

import styled from "styled-components";
import { useDeleteCourse } from "./useDeleteCourse";
import AddCourseModal from "./AddCourseModal";
import CourseList from "./CourseList";
import { useState } from "react";
import ViewCourseDetails from "./ViewCourseDetails";

const StyledCourseLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  gap: 32px;
`;

function Course() {
  const { user, isLoading, error: userError } = useUser();

  const { createCourse, isCreating, error: courseError } = useCreateCourse();

  const { deleteCourse, isDeleting } = useDeleteCourse();

  const { isGetCourses, courses } = useCourses(user?._id);

  const [currentModal, setCurrentModal] = useState("add");
  const [currentCourse, setCurrentCourse] = useState(null);
  function handleModalController(value, course) {
    setCurrentModal(value);
    setCurrentCourse(course);
  }

  if (isCreating || isLoading || isGetCourses) return <p>Loading...</p>;

  if (courseError) alert(courseError);
  if (userError) alert(userError);

  if (isDeleting) return <p>Deleting course...</p>;

  return (
    <StyledCourseLayout>
      <div>
        <CourseList
          courses={courses}
          deleteCourse={deleteCourse}
          onModalController={handleModalController}
        />
      </div>
      <div>
        {currentModal === "add" && (
          <AddCourseModal createCourse={createCourse} user={user} />
        )}
        {currentModal === "details" && (
          <ViewCourseDetails
            course={currentCourse}
            onModalController={handleModalController}
          />
        )}
      </div>
    </StyledCourseLayout>
  );
}

export default Course;

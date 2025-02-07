import styled, { css } from "styled-components";
import { Heading } from "../../components/Heading";
import { TextButton } from "../../components/Button";
import { StyledFlex } from "../../components/Flex";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const StyledCourseList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  list-style: none;
`;

const MainContent = styled.div`
  margin-bottom: 12px;
`;

const StyledCourse = styled.li`
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  padding: 10px;
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

function CourseList({ courses, deleteCourse, onModalController }) {
  function handleDeleteCourse(id) {
    console.log(id);
    deleteCourse(id);
  }

  return (
    <div>
      <h2>All of your course</h2>
      <hr />
      <StyledCourseList>
        {courses?.map((course) => (
          <StyledCourse key={course._id} color={course.semesterColor}>
            <MainContent>
              <Heading>Semester {course.semesterNumber}</Heading>
              <p>{course.courseTitle}</p>
              <p>{course.courseDesc}</p>
              <p>📅 Start date: {formatDate(course.startDate)}</p>
              <p>📅 End date: {formatDate(course.endDate)}</p>
              <p>📊 Course progress: {course?.progress}</p>
              <p>⭐️ Course grade: {course.grade}</p>
            </MainContent>

            <StyledFlex>
              <TextButton
                color="blue"
                onClick={() => onModalController("details", course)}
              >
                View Details
              </TextButton>
              <TextButton
                color="red"
                onClick={() => handleDeleteCourse(course._id)}
              >
                Delete course
              </TextButton>
            </StyledFlex>
          </StyledCourse>
        ))}
      </StyledCourseList>
    </div>
  );
}

export default CourseList;

import styled, { css } from "styled-components";
import { Heading } from "../../components/Heading";
import { formatDate } from "../../util/helpers/formatDate";
import { StyledFlex } from "../../components/Flex";
import { StyledLink } from "../../components/StyledLink";
import { TextButton } from "../../components/Button";
import { Bold } from "../../components/Typography";
import { Link } from "react-router-dom";

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

const MainContent = styled.div`
  margin-bottom: 12px;
`;

function CourseCard({ course, handleDeleteCourse }) {
  return (
    <StyledCourse key={course._id} color={course.semesterColor}>
      <Link to={course?._id}>View Details</Link>
      <MainContent>
        <StyledFlex>
          <Heading>Semester {course.semesterNumber}</Heading>
        </StyledFlex>
        <p>
          <Bold>📖 Course name:</Bold> {course.courseTitle}
        </p>
        <p>
          <Bold>👩‍🏫 Proffessor:</Bold> {course.proffessorName}
        </p>
        <p>
          <Bold>✍🏻 Course description:</Bold> {course.courseDesc}
        </p>
        <p>
          <Bold>📅 Start date:</Bold> {formatDate(course.startDate)}
        </p>
        <p>
          <Bold>📅 End date:</Bold> {formatDate(course.endDate)}
        </p>
        <p>
          <Bold>📊 Course progress:</Bold> {course?.progress}
        </p>
        <p>
          <Bold>⭐️ Course grade</Bold>: {course.grade}
        </p>
        {/* <p>Course difficulty: {course.difficulty}</p>
        <ul>
          {course?.links
            ?.trim()
            .split("|")
            .map((link, i) => (
              <li key={i}>
                Link {i + 1}:{" "}
                <a href={link} target="_blank">
                  {link}
                </a>
              </li>
            ))}
        </ul> */}
      </MainContent>

      <StyledFlex>
        <StyledLink color="blue" to={`/app/course-update/${course._id}`}>
          Update Details
        </StyledLink>
        <TextButton color="red" onClick={() => handleDeleteCourse(course._id)}>
          Delete course
        </TextButton>
      </StyledFlex>
    </StyledCourse>
  );
}

export default CourseCard;

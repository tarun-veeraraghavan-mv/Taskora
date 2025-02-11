import { useState } from "react";
import styled, { css } from "styled-components";
import { TextButton } from "../../components/Button";
import { StyledFlex } from "../../components/Flex";
import { Heading } from "../../components/Heading";
import { StyledLink } from "../../components/StyledLink";
import { Bold } from "../../components/Typography";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const StyledCourseList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  list-style: none;
`;

const MainContent = styled.div`
  margin-bottom: 12px;
`;

const StyledHr = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
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

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 250px;
  padding: 10px;
  font-size: 16px;
  transition: all 0.2s;

  &:focus {
    width: 300px;
  }
`;

const StyledSelection = styled.select`
  font-size: 14px;
  padding: 10px;
  width: 170px;
`

function CourseList({ courses, deleteCourse }) {
  function handleDeleteCourse(id) {
    console.log(id);
    deleteCourse(id);
  }

  const [input, setInput] = useState("");
  const [select, setSelect] = useState(null)

  let filteredCourses =
    input === ""
      ? courses
      : courses.filter((course) =>
          course.courseTitle.toLowerCase().includes(input.toLowerCase())
        );

        console.log([...new Set(courses?.map(course => course.semesterNumber))].sort((a,b) => a - b))

  let sortedAndFilteredCourse = isNaN(select) ? filteredCourses : courses?.filter(course => course.semesterNumber === select)

  console.log(sortedAndFilteredCourse)

  return (
    <div>
      <StyledHeader>
        <h2>All of your course</h2>
        <StyledFlex>
          <StyledInput
            placeholder="Search course by name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input.length !== 0 && (
            <p>
              <Bold>{filteredCourses?.length}</Bold> results found
            </p>
          )}
        </StyledFlex>
        <StyledSelection onChange={e => setSelect(Number(e.target.value))}>
        <option>Sort by semester</option>
          {[...new Set(courses?.map(course => course.semesterNumber))].sort((a,b) => Number(a) - Number(b)).map(no => <>
           <option key={no} value={Number(no)}>Semester {no}</option>
          </>)}
        </StyledSelection>
        
        <StyledLink to="/app/course-add" color="green">
          + Add Course
        </StyledLink>
      </StyledHeader>

      <StyledHr />

      <StyledCourseList>
        {filteredCourses?.length === 0 ? (
          <p>No course found</p>
        ) : (
          filteredCourses?.map((course) => (
            <StyledCourse key={course._id} color={course.semesterColor}>
              <MainContent>
                <Heading>Semester {course.semesterNumber}</Heading>
                <p>{course.courseTitle}</p>
                <p>{course.courseDesc}</p>
                <p>📅 Start date: {formatDate(course.startDate)}</p>
                <p>📅 End date: {formatDate(course.endDate)}</p>
                <p>📊 Course progress: {course?.progress}</p>
                <p>⭐️ Course grade: {course.grade}</p>
                <p>Course difficulty: {course.difficulty}</p>
                <ul>{course?.links?.trim().split('|').map((link, i) => <li key={i}>Link {i + 1}: <a href={link} target="_blank">{link}</a></li>)}</ul>
              </MainContent>

              <StyledFlex>
                <StyledLink
                  color="blue"
                  to={`/app/course-update/${course._id}`}
                >
                  Update Details
                </StyledLink>
                <TextButton
                  color="red"
                  onClick={() => handleDeleteCourse(course._id)}
                >
                  Delete course
                </TextButton>
              </StyledFlex>
            </StyledCourse>
          ))
        )}
      </StyledCourseList>
    </div>
  );
}

export default CourseList;

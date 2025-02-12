import { useState } from "react";
import styled from "styled-components";
import CourseCard from "./CourseCard";
import CourseHeader from "./CourseHeader";

const StyledCourseList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  list-style: none;
`;

const StyledHr = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function CourseList({ courses, deleteCourse }) {
  function handleDeleteCourse(id) {
    console.log(id);
    deleteCourse(id);
  }

  const [input, setInput] = useState("");
  const [select, setSelect] = useState(null);
  const [open, setOpen] = useState(true);

  let filteredCourses =
    input === ""
      ? courses
      : courses.filter((course) =>
          course.courseTitle.toLowerCase().includes(input.toLowerCase())
        );

  return (
    <div>
      <CourseHeader
        input={input}
        setInput={setInput}
        filteredCourses={filteredCourses}
        courses={courses}
        setSelect={setSelect}
      />

      <StyledHr />

      <StyledCourseList>
        {filteredCourses?.length === 0 ? (
          <p>No course found</p>
        ) : (
          filteredCourses?.map((course) => (
            <div key={course?._id}>
              <CourseCard
                course={course}
                handleDeleteCourse={handleDeleteCourse}
              />
              {/* {open && <CourseCard course={course} />} */}
            </div>
          ))
        )}
      </StyledCourseList>
    </div>
  );
}

export default CourseList;

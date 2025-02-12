import styled from "styled-components";
import { StyledFlex } from "../../components/Flex";
import { StyledLink } from "../../components/StyledLink";
import { Bold } from "../../components/Typography";

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
`;

function CourseHeader({
  input,
  setInput,
  filteredCourses,
  courses,
  setSelect,
}) {
  return (
    <StyledHeader>
      <h2>All of your course</h2>
      <StyledFlex>
        <StyledSelection onChange={(e) => setSelect(Number(e.target.value))}>
          <option key={-1}>Sort by semester</option>
          {[...new Set(courses?.map((course) => course.semesterNumber))]
            .sort((a, b) => Number(a) - Number(b))
            .map((no) => (
              <>
                <option key={no} value={Number(no)}>
                  Semester {no}
                </option>
              </>
            ))}
        </StyledSelection>
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

      <StyledLink to="/app/course-add" color="green">
        + Add Course
      </StyledLink>
    </StyledHeader>
  );
}

export default CourseHeader;

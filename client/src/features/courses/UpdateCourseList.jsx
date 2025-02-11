import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { StyledFlex } from "../../components/Flex";
import { Button, Form, Input, Label, Select } from "../../components/Form";
import { StyledLink } from "../../components/StyledLink";
import { useUser } from "../auth/useUser";
import { useCourseById } from "./useCourseById";
import { useUpdateCourse } from "./useUpdateCourse";

const StyledCenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function UpdateCourseModal() {
  const { user, isLoading } = useUser();
  const { updateCourse, isUpdating } = useUpdateCourse();

  const { id } = useParams();
  console.log(id);
  const { course, isFetchingCourse, fetchCourseError } = useCourseById(id);
  console.log(course);

  const navigate = useNavigate();

  const formRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    const finalData = {
      ...data,
      userId: user._id,
      semesterNumber: Number(data.semesterNumber),
      grade: Number(data.grade),
    };

    console.log(finalData);

    updateCourse({ courseId: id, data: finalData });

    navigate("/app/course");
  }

  if (formRef.current) {
    formRef.current.reset();
  }

  if (isLoading) return <p>Loading...</p>;
  if (isUpdating) return <p>Loading...</p>;
  if (isFetchingCourse) return <p>Loading...</p>;

  return (
    <StyledCenterDiv>
      <Form onSubmit={onSubmit} ref={formRef}>
        <StyledLink to="/app/course" color="blue">
          &larr; Go back
        </StyledLink>
        <h2>Update course now</h2>
        <div>
          <Label>Semester number</Label>
          <Input
            type="text"
            placeholder="What is the semester number"
            name="semesterNumber"
            defaultValue={course?.semesterNumber}
          />
        </div>
        <div>
          <Label>Course title</Label>
          <Input
            type="text"
            placeholder="Name of the course"
            name="courseTitle"
            defaultValue={course?.courseTitle}
          />
        </div>
        <div>
          <Label>Course Description</Label>
          <Input
            type="text"
            placeholder="Short description of course"
            name="courseDesc"
            defaultValue={course?.courseDesc}
          />
        </div>
        <div>
          <Label>Proffessor Name</Label>
          <Input
            type="text"
            placeholder="Name of professor"
            name="proffessorName"
            defaultValue={course?.proffessorName}
          />
        </div>
        <StyledFlex>
          <div>
            <Label>Start date</Label>
            <Input
              type="date"
              name="startDate"
              defaultValue={
                course?.startDate ? course.startDate.split("T")[0] : ""
              }
            />
          </div>
          <div>
            <Label>End date</Label>
            <Input
              type="date"
              name="endDate"
              defaultValue={
                course?.endDate ? course.startDate.split("T")[0] : ""
              }
            />
          </div>
        </StyledFlex>

        <StyledFlex>
          <div>
            <Label>Start time</Label>
            <Input
              type="time"
              name="startTime"
              defaultValue={course?.startTime}
            />
          </div>
          <div>
            <Label>End time</Label>
            <Input type="time" name="endTime" defaultValue={course?.endTime} />
          </div>
        </StyledFlex>

        <div>
          <Label>Progress</Label>
          <Select name="progress" defaultValue={course?.progress}>
            <option value="notStarted">Not started yet</option>
            <option value="inProgress">In progress</option>
            <option value="completed">Completed</option>
          </Select>
        </div>
        <div>
          <Label>Grade</Label>
          <Input
            type="number"
            placeholder="4.56"
            name="grade"
            defaultValue={course?.grade}
            min={0}
          />
        </div>
        <div>
          <Label>Difficulty</Label>
          <Select name="difficulty" defaultValue={course?.difficulty}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Difficulty</option>
          </Select>
        </div>
        <div>
          <Label>Important Links (sepearate them by &quot;|&quot;)</Label>
          <Input type="input" name="links" defaultValue={course.links}/>
        </div>
        <div>
          <Label>Label Color</Label>
          <Select name="semesterColor" defaultValue={course?.semesterColor}>
            <option value="#5EEAD4">Green</option>
            <option value="#FEF08A">Yellow</option>
            <option value="#E9D5FF">Purple</option>
            <option value="#BBF7D0">Teal</option>
          </Select>
          <Button>Update course</Button>
        </div>
      </Form>
    </StyledCenterDiv>
  );
}

export default UpdateCourseModal;

// onBlur={e => handleUpdate(e,namOfField)}
// handleUpdate(e) {
// const {value} = e.target
//
// })

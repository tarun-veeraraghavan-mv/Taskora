import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledFlex } from "../../components/Flex";
import { Button, Form, Input, Label, Select } from "../../components/Form";
import { StyledLink } from "../../components/StyledLink";
import { useUser } from "../auth/useUser";
import { useCreateCourse } from "./useCreateCourse";

const StyledCenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function AddCourseModal() {
  const { user, isLoading } = useUser();
  const { createCourse, isCreating } = useCreateCourse();

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

    createCourse(finalData);

    navigate("/app/course");
  }

  if (formRef.current) {
    formRef.current.reset();
  }

  if (isLoading) return <p>Loading...</p>;
  if (isCreating) return <p>Loading...</p>;

  return (
    <StyledCenterDiv>
      <Form onSubmit={onSubmit} ref={formRef}>
        <StyledLink to="/app/course" color="blue">
          &larr; Go back
        </StyledLink>
        <h2>Add new course now</h2>
        <div>
          <Label>Semester number</Label>
          <Input
            type="text"
            placeholder="What is the semester number"
            name="semesterNumber"
          />
        </div>
        <div>
          <Label>Course title</Label>
          <Input
            type="text"
            placeholder="Name of the course"
            name="courseTitle"
          />
        </div>
        <div>
          <Label>Course Description</Label>
          <Input
            type="text"
            placeholder="Short description of course"
            name="courseDesc"
          />
        </div>
        <div>
          <Label>Proffessor Name</Label>
          <Input
            type="text"
            placeholder="Name of professor"
            name="proffessorName"
          />
        </div>
        <StyledFlex>
          <div>
            <Label>Start date</Label>
            <Input type="date" name="startDate" />
          </div>
          <div>
            <Label>End date</Label>
            <Input type="date" name="endDate" />
          </div>
        </StyledFlex>

        <StyledFlex>
          <div>
            <Label>Start time</Label>
            <Input type="time" name="startTime" />
          </div>
          <div>
            <Label>End time</Label>
            <Input type="time" name="endTime" />
          </div>
        </StyledFlex>

        <div>
          <Label>Progress</Label>
          <Select name="progress">
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
            defaultValue={null}
            min={0}
          />
        </div>
        <div>
          <Label>Difficulty</Label>
          <Select name="difficulty">
            <option>Easy</option>
            <option>Medium</option>
            <option>Difficulty</option>
          </Select>
        </div>
        <div>
          <Label>Important Links (sepearate them by &quot;|&quot;)</Label>
          <Input type="input" name="links" placeholder="link1 | link2 | link3 ..."/>
        </div>
        <div>
          <Label>Label Color</Label>
          <Select name="semesterColor">
            <option value="#5EEAD4">Green</option>
            <option value="#FEF08A">Yellow</option>
            <option value="#E9D5FF">Purple</option>
            <option value="#BBF7D0">Teal</option>
          </Select>
          <Button>Create new course</Button>
        </div>
      </Form>
    </StyledCenterDiv>
  );
}

export default AddCourseModal;
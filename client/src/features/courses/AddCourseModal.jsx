import { useRef } from "react";
import { Button, Form, Input, Label, Select } from "../../components/Form";
import { StyledFlex } from "../../components/Flex";

function AddCourseModal({ createCourse, user }) {
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
  }

  if (formRef.current) {
    formRef.current.reset();
  }

  return (
    <div>
      <h2>Add new course now</h2>
      <Form onSubmit={onSubmit} ref={formRef}>
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
    </div>
  );
}

export default AddCourseModal;

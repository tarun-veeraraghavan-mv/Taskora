import { TextButton } from "../../components/Button";
import { StyledFlex } from "../../components/Flex";
import { Form, Input, Label, Select } from "../../components/Form";

function ViewCourseDetails({ course, onModalController }) {
  return (
    <div>
      <Form key={course?._id}>
        <div>
          <Label>Semester number</Label>
          <Input
            type="text"
            placeholder="What is the semester number"
            name="semesterNumber"
            defaultValue={course?.semesterNumber}
            disabled={true}
          />
        </div>
        <div>
          <Label>Course title</Label>
          <Input
            type="text"
            placeholder="Name of the course"
            name="courseTitle"
            defaultValue={course?.courseTitle}
            disabled={true}
          />
        </div>
        <div>
          <Label>Course Description</Label>
          <Input
            type="text"
            placeholder="Short description of course"
            name="courseDesc"
            defaultValue={course?.courseDesc}
            disabled={true}
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
              disabled={true}
            />
          </div>
          <div>
            <Label>End date</Label>
            <Input
              type="date"
              name="endDate"
              defaultValue={
                course?.startDate ? course.startDate.split("T")[0] : ""
              }
              disabled={true}
            />
          </div>
        </StyledFlex>

        <div>
          <Label>Progress</Label>
          <Select
            name="progress"
            defaultValue={course?.progress}
            disabled={true}
          >
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
            disabled={true}
            min={0}
          />
        </div>
        <div>
          <Label>Label Color</Label>
          <Select
            name="semesterColor"
            defaultValue={course?.semesterColor}
            disabled={true}
          >
            <option value="#5EEAD4">Green</option>
            <option value="#FEF08A">Yellow</option>
            <option value="#E9D5FF">Purple</option>
            <option value="#BBF7D0">Teal</option>
          </Select>
        </div>
      </Form>
      <TextButton color="blue" onClick={() => onModalController("add")}>
        Add Course
      </TextButton>
    </div>
  );
}

export default ViewCourseDetails;

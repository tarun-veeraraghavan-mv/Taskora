import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Input, Label } from "../../components/Form";
import LoaderScreen from "../../components/LoaderScreen";
import { useCourseById } from "./useCourseById";
import { formatDate } from "../../util/helpers/formatDate";
import { StyledFlex } from "../../components/Flex";

const StyledCourseLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  gap: 32px;
`;

function CourseDetails() {
  const params = useParams();
  console.log(params);
  const { course, isFetchingCourse, fetchCourseError } = useCourseById(
    params.courseId
  );

  console.log(course);

  if (isFetchingCourse) return <LoaderScreen />;

  return (
    <StyledCourseLayout>
      <div>
        <Label>Semester number</Label>
        <Input defaultValue={course?.semesterNumber} />
      </div>
      <div>
        <Label>Course title</Label>
        <Input defaultValue={course?.courseTitle} />
      </div>
      <div>
        <Label>Proffessor name</Label>
        <Input defaultValue={course?.proffessorName} />
      </div>
      <div>
        <Label>Course description</Label>
        <Input defaultValue={course?.courseDesc} />
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
            defaultValue={course?.endDate ? course.endDate.split("T")[0] : ""}
          />
        </div>
      </StyledFlex>

      <StyledFlex>
        <div>
          <Label>Progress</Label>
          <Input type="time" name="startTime" defaultValue={course?.progress} />
        </div>
        <div>
          <Label>Course grade</Label>
          <Input type="time" name="endTime" defaultValue={course?.grade} />
        </div>
      </StyledFlex>
      <div>
        <Label>Course difficulty</Label>
        <Input defaultValue={course?.difficulty} />
      </div>
      <div>
        <Label>Semesster color you have set</Label>
        <Input defaultValue={course?.semesterColor} />
      </div>
    </StyledCourseLayout>
  );
}

export default CourseDetails;

import styled from "styled-components";
import { useUser } from "../features/auth/useUser";
import { useCourses } from "../features/courses/useCourses";
import { Button } from "../components/Form";
import { useTodos } from "../features/tracker/useTodos";

const CenterDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  gap: 32px;
`;

const StyledTodoList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
`;

function TodoTracker() {
  const { user, isLoading, error } = useUser();
  const { todos, isFetchingTodos, todoError } = useTodos();
  const { courses, isGetCourses, getCourseError } = useCourses(user?._id);

  if (isGetCourses || isLoading || isFetchingTodos) return <p>Loading...</p>;

  return (
    <CenterDiv>
      <h2>Plan your goals and make it happen!</h2>
      <StyledTodoList>
        {courses?.map((course) => (
          <li key={course?._id}>
            <p>Semester {course?.semesterNumber}</p>
            <h3>{course?.courseTitle}</h3>
            <ul>
              {todos
                ?.filter((todo) => todo?.courseId === course?._id)
                .map((todo) => (
                  <li key={todo?._id}>{todo.name}</li>
                ))}
            </ul>
            <Button>Add a task</Button>
          </li>
        ))}
      </StyledTodoList>
      <div>
        <label>Task name</label>
        <input type="text" placeholder="Task" />
      </div>
    </CenterDiv>
  );
}

export default TodoTracker;

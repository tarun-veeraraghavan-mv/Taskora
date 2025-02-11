import styled from "styled-components";
import { useUser } from "../features/auth/useUser";
import { useCourses } from "../features/courses/useCourses";
import { Button, Form } from "../components/Form";
import { useTodos } from "../features/tracker/useTodos";
import { useCreateTodo } from "../features/tracker/useCreateTodo";

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
  const { createTodo, isCreatingTodo } = useCreateTodo();

  function handleAddTodo(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    createTodo(data);
  }

  if (isGetCourses || isLoading || isFetchingTodos) return <p>Loading...</p>;

  if (isCreatingTodo) return <p>Loading...</p>;

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
                  <li key={todo?._id}>
                    <p>{todo.name}</p>
                    <button>Delete</button>
                  </li>
                ))}
            </ul>
            <Form onSubmit={handleAddTodo}>
              <div>
                <label>Task name</label>
                <input type="text" placeholder="Task" name="name" />
                <input type="hidden" value={course?._id} name="courseId" />
              </div>
              <Button>Add a task</Button>
            </Form>
          </li>
        ))}
      </StyledTodoList>
    </CenterDiv>
  );
}

export default TodoTracker;

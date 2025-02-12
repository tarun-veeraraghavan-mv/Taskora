import styled, { css } from "styled-components";
import { useUser } from "../features/auth/useUser";
import { useCourses } from "../features/courses/useCourses";
import { Button, Form, Input, Label } from "../components/Form";
import { useTodos } from "../features/tracker/useTodos";
import { useCreateTodo } from "../features/tracker/useCreateTodo";
import { useDeleteTodo } from "../features/tracker/useDeleteTodo";
import { formatDate } from "../util/helpers/formatDate";
import { useMarkcompleted } from "../features/tracker/useMarkcompleted";
import LoaderScreen from "../components/LoaderScreen";

const TodoHeader = styled.div`
  padding: 10px;

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`;

const TodoTask = styled.li`
  background-color: aliceblue;
`;

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTodoList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  gap: 10px;
`;

function TodoTracker() {
  const { user, isLoading, error } = useUser();
  const { todos, isFetchingTodos, todoError } = useTodos();
  const { courses, isGetCourses, getCourseError } = useCourses(user?._id);
  const { createTodo, isCreatingTodo } = useCreateTodo();
  const { deletedTodo, isDeletingTodo } = useDeleteTodo();
  const { markCompleted, isMarkingComplete } = useMarkcompleted();

  function handleAddTodo(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    createTodo(data);
  }

  if (error) {
    alert(error.message);
  }
  if (todoError) {
    alert(todoError.message);
  }
  if (getCourseError) {
    alert(getCourseError.message);
  }

  if (isGetCourses || isLoading || isFetchingTodos) return <LoaderScreen />;

  if (isCreatingTodo) return <LoaderScreen />;
  if (isDeletingTodo) return <LoaderScreen />;
  if (isMarkingComplete) return <LoaderScreen />;

  return (
    <div>
      <h2>Plan your goals and make it happen!</h2>
      <StyledTodoList>
        {courses?.map((course) => (
          <li key={course?._id}>
            <TodoHeader color={course.semesterColor}>
              <p>Semester {course?.semesterNumber}</p>
              <h3>{course?.courseTitle}</h3>
            </TodoHeader>

            <Form onSubmit={handleAddTodo}>
              <div>
                <div>
                  <Label>Task name</Label>
                  <Input type="text" placeholder="Task" name="name" />
                </div>
                <Input type="hidden" value={course?._id} name="courseId" />
                <div>
                  <Label>Due date</Label>
                  <Input type="date" name="dueDate" />
                </div>
                <div>
                  <Label>Remarks</Label>
                  <Input type="text" name="remarks" />
                </div>
              </div>

              <Button>Add a task</Button>
            </Form>

            <TaskList>
              {todos
                ?.filter(
                  (todo) => todo?.courseId === course?._id && !todo?.completed
                )
                .map((todo) => (
                  <TodoTask key={todo?._id}>
                    <p>{todo.name}</p>
                    <p>{formatDate(todo.dueDate)}</p>
                    <p>Remarks: {todo?.remarks}</p>
                    <button onClick={() => markCompleted(todo?._id)}>
                      Mark completed
                    </button>
                    <button onClick={() => deletedTodo(todo?._id)}>
                      Delete
                    </button>
                  </TodoTask>
                ))}
            </TaskList>
          </li>
        ))}
      </StyledTodoList>
    </div>
  );
}

export default TodoTracker;

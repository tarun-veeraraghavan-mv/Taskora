import styled from "styled-components";
import { useTodos } from "../features/tracker/useTodos";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  padding: 10px;
  list-style: none;
`;

const StyledEl = styled.li`
  padding: 10px;
  background-color: #e5e7eb;
`;

function Accomplishments() {
  const { todos, isFetchingTodos } = useTodos();

  if (isFetchingTodos) return <p>Loading...</p>;

  return (
    <div>
      <h1>Accomplishments</h1>
      <h2>From your todos</h2>
      <StyledList>
        {todos
          ?.filter((todo) => todo?.completed === true)
          ?.map((todo) => (
            <StyledEl key={todo?._id}>
              <span>{todo.name}</span>
            </StyledEl>
          ))}
      </StyledList>
    </div>
  );
}

export default Accomplishments;

import { Outlet } from "react-router-dom";
import { StyledFlex } from "../../components/Flex";
import { StyledLink } from "../../components/StyledLink";
import styled from "styled-components";

const CenterDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  gap: 32px;
`;

function TodoLayout() {
  return (
    <CenterDiv>
      <StyledFlex marginBottom={"20px"}>
        <StyledLink color="blue" to="course">
          Track your courses
        </StyledLink>
        <StyledLink color="green" to="goals">
          Track your goals
        </StyledLink>
      </StyledFlex>
      <div>
        <Outlet />
      </div>
    </CenterDiv>
  );
}

export default TodoLayout;

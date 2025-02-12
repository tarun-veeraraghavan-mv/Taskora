import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 24px 0;
  background-color: #fff;
  position: sticky;
  top: 0;
  border-bottom: 2px solid #cbd5e1;
  z-index: 100;
  box-shadow: 0 12px 24px rgba(0,0,0,0.05);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: black;

  &:hover {
    font-weight: bold;
  }

  &.active {
    font-weight: bold;
  }
`;

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  text-decoration: none;
`;

const Li = styled.li`
  list-style: none;
`;

function NavBar() {
  return (
    <StyledHeader>
      <StyledNav>
        <Li>
          <StyledNavLink to="home">🏠 Home</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="course">📖 Course planner</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="todo">✅ Todo tracker</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="accomplishments">🏆 Accomplishments</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="me">🧑‍💼 Your profile</StyledNavLink>
        </Li>
      </StyledNav>
    </StyledHeader>
  );
}

export default NavBar;

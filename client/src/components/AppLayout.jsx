import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 32px 0;
  background-color: lightgray;
  position: sticky;
  top: 0;
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

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Li>
          <StyledNavLink to="home">Home</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="course">🧮 Course planner</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="todo">Todo tracker</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="me">Your profile</StyledNavLink>
        </Li>
      </StyledNav>
    </StyledHeader>
  );
}

export default AppLayout;

import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

function CalendarView() {
  const [value, onChange] = useState(new Date());
  console.log(value);

  return (
    <StyledDiv>
      <Calendar onChange={onChange} value={value} />
    </StyledDiv>
  );
}

export default CalendarView;

import React from "react";
import styled from "styled-components";

const Week = styled.div`
  width: 40px;
  text-align: center;
  margin-right: 20px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
  }
`;

const Weeks = ({ className }) => {
  const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className={className}>
      {weeks.map(week => (
        <Week key={week}>{week}</Week>
      ))}
    </div>
  );
};

const StyledWeeks = styled(Weeks)`
  display: flex;
  width: 400px;
  border-bottom: 1px solid white;
  padding: 1rem 0;
`;

export default StyledWeeks;
import React from "react";
import styled from "styled-components";
import MonthGrid from './MonthGrid';
import { MonthNames } from '../data';


const MonthName = ({ date, className }) => {
    const month = date.getMonth();
    return <div className={className}>{MonthNames[month]}</div>;
  };
  
  const StyledMonthName = styled(MonthName)`
    font-size: 2rem;
    color: white;
    margin-bottom: 2rem;
  `;
  
  const Month = ({ date, className, onDayClick }) => {
    return (
      <div className={className}>
        <StyledMonthName date={date} />
        <MonthGrid onDayClick={onDayClick} date={date} />
      </div>
    );
  };
  
  const StyledMonth = styled(Month)`
    position: absolute;
    transform: translateY(${props => props.top});
  `;

  export default StyledMonth;
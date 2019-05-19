import React from "react";
import styled from "styled-components";
import { dateToNumberOfDaysInMonth, returnNthMonth, returnNextMonth, returnPreviousMonth, returnNthDate } from '../utils';
import Day from './Day';

function MonthGrid({ className, date, onDayClick }) {
    const N = 35;
    const nDays = dateToNumberOfDaysInMonth(date);
    const firstDate = new Date(date);
    firstDate.setDate(1);
    const firstDay = firstDate.getDay() || 7;
    let a = N - firstDay + 1;
  
    const handleOnClick = day => {
      onDayClick(returnNthDate(date, day));
    }
  
    return (
      <div className={className}>
        {Array(N)
          .fill()
          .map((_, i) => i + 1)
          .map(day => {
            if (a >= nDays && (day < firstDay || day > nDays + firstDay - 1)) {
              return <Day size="40px" mobileSize="35px" empty={true} key={day} />;
            } else {
              if (a < nDays) {
                ++a
                return (
                  <Day onClick={handleOnClick.bind(null, a)} size="40px" mobileSize="35px" key={day}>
                    {a}
                  </Day>
                );
              } else {
                const value = day - firstDay + 1;
                return (
                  <Day onClick={handleOnClick.bind(null, value)} size="40px" mobileSize="35px" key={day}>
                    {value}
                  </Day>
                );
              }
            }
          })}
      </div>
    );
  }
  
  const StyledMonthGrid = styled(MonthGrid)`
    width: 400px;
    height: 320px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    @media (max-width: 768px) {
      width: 365px;
    }
  `;

  export default StyledMonthGrid;
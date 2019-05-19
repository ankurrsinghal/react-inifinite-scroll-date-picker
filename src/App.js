import React from "react";
import styled from "styled-components";
import Calendar from './components/Calendar';

const App = ({ className }) => {

  const [date, setDate] = React.useState('');

  const handleDateChange = date => {
    setDate(date);
  }

  const code = `
const App = () => {
  const [date, setDate] = React.useState('');
  const handleDateChange = date => {
    setDate(date);
  }

  return (
    <React.Fragment>
      {date && date.toUTCString()}
      <Calendar onChange={handleDateChange} />
    </React.Fragment>
  )
}
  `;

  return (
    <div className={className}>
      <div className="intro">
        <div className="page-1">
          <div className="title">Hey,</div>
          <div className="sub-title">React<br/>Infinite<br/>Calendar</div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div className="page-2">
          <div className="title">How to use it?</div>
          <div className="">
            <code><pre>{code}</pre></code>
          </div>
        </div>
      </div>
      <div className="calendar">
        <div className="selected-date">
          {date ? date.toUTCString() : 'Select a date'}
        </div>
        <Calendar
          className="calendar-app"
          onChange={handleDateChange}
        />
      </div>
    </div>
  )
}

const StyledApp = styled(App)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  padding: 2rem 6rem;

  .page-1 {
    .title {
      font-size: 150px;
      font-weight: 300;
    }
  
    .sub-title {
      margin-top: 60px;
      font-size: 75px;
      font-weight: 100;
    }
  }

  .page-2 {
    .title {
      font-size: 50px;
      font-weight: 300;
    }
  
    .sub-title {
      margin-top: 60px;
      font-size: 75px;
      font-weight: 100;
    }

    code {
      font-size: 20px;
    }
  }

  .calendar {
    position: sticky;
    top: 0;

    .calendar-app {
      height: 650px;
    }

    .selected-date {
      font-size: 13px;
      text-align: center;
      padding: .75rem 0;
      margin: 1rem 0;
      border: 1px solid black;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    padding: 0;

    .intro {
      display: none;
    }

    .calendar {
      width: 100%;
      .calendar-app {
        height: 100vh;
        border-radius: 0px;
      }
    }
  }
`

export default StyledApp;

import React from "react";
import styled from "styled-components";
import { returnNthMonth, returnNextMonth, returnPreviousMonth } from '../utils';
import Weeks from './Weeks';
import Month from './Month';
import Year from './Year';
import MonthsContainer, { MonthsScroller } from './MonthsContainer';
const MONTH_HEIGHT = 500;
const HEIGHT = 1000000;


class Calendar extends React.Component {
  state = {
    index: 0,
    date: new Date()
  };
  ref = React.createRef();
  halfMark = 0;

  componentDidMount() {
    const { current } = this.ref;
    current.scrollTop = (current.scrollHeight - current.clientHeight) / 2;
    this.halfMark = (current.scrollHeight/2)/MONTH_HEIGHT;
  }

  handleScroll = e => {
    const target = e.target;
    const top = target.scrollTop + target.clientHeight /4;
    const month = Math.floor(top/MONTH_HEIGHT);
    if (month !== this.state.index) {
      this.setState({ index: month-this.halfMark });
    }
  };

  handleDayClick = date => {
    this.props.onChange(date);
  }

  render() {
    const date = new Date();
    const index = this.state.index;
    const indexedDate = returnNthMonth(date, index)
    return (
      <div className={this.props.className}>
        <Year>{indexedDate.getFullYear()}</Year>
        <Weeks />
        <MonthsContainer ref={this.ref} onScroll={this.handleScroll}>
          <MonthsScroller style={{ height: HEIGHT + 'px' }}>
            <Month
              onDayClick={this.handleDayClick}
              top={`${(index + this.halfMark - 1)*MONTH_HEIGHT}px`}
              date={returnPreviousMonth(indexedDate)}
            />
            <Month
              onDayClick={this.handleDayClick}
              top={`${(index + this.halfMark)*MONTH_HEIGHT}px`}
              date={indexedDate}
            />
            <Month
              onDayClick={this.handleDayClick}
              top={`${(index+1 + this.halfMark)*MONTH_HEIGHT}px`}
              date={returnNextMonth(indexedDate)}
            />
          </MonthsScroller>
        </MonthsContainer>
      </div>
    );
  }
}

const StyledCalendar = styled(Calendar)`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 50px 25px 0;
  background: black;
  max-width: 450px;
  margin-left: auto;
  border-radius: 8px;
`;

export default StyledCalendar;
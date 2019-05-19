import styled, { css } from "styled-components";
import { Square, Circle } from '../UI';

const dayStyle = props => {
  if (!props.empty) {
    return css`
      font-size: 13px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.75);
      color: white;
      font-weight: 300;
      transition: background 0.3s;
      cursor: pointer;
      font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;

      &:hover {
        background: white;
        color: black;
      }
    `;
  }
};

const Day = styled(Circle)`
  ${props => dayStyle(props)}
  margin: 0px 10px;

  &:nth-child(7n + 1) {
    margin-left: 0;
  }

  &:nth-child(7n) {
    margin-right: 0;
  }
`;

export default Day;
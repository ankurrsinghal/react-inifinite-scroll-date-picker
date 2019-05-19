import styled from "styled-components";

export const Square = styled.div`
  width: ${props => props.size || "20px"};
  height: ${props => props.size || "20px"};
`;

export const Circle = styled(Square)`
  border-radius: 50%;
`;
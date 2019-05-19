import styled from "styled-components";

export const Square = styled.div`
  width: ${props => props.size || "20px"};
  height: ${props => props.size || "20px"};
  line-height: ${props => props.size};

  @media (max-width: 768px) {
    width: ${props => props.mobileSize || "20px"};
    height: ${props => props.mobileSize || "20px"};
    line-height: ${props => props.mobileSize};
  }
`;

export const Circle = styled(Square)`
  border-radius: 50%;
`;
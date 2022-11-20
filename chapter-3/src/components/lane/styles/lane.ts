import styled from 'styled-components';

export const LaneWrapper = styled.div`
  text-align: center;
  padding: 0;
  background: lightgray;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;

  @media screen and (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  overflow: hidden;
  @media screen and(min-width: 320px) {
    max-width: 320px;
  }
  @media screen and(min-width: 480px) {
    max-width: 480px;
  }
  @media screen and(min-width:768px) {
    max-width: 768px;
  }
  @media screen and(min-width:1200px) {
    max-width: 1200px;
  }
`;

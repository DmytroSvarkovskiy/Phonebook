import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  /* overflow: hidden; */

  @media (min-width: 320px) {
    max-width: 100%;
  }
  @media (min-width: 425px) {
    max-width: 425px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

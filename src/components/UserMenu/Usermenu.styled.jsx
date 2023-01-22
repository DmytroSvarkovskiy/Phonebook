import styled from 'styled-components';
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1280px) {
    justify-content: center;
    gap: 20px;
  }
`;
export const P = styled.p`
  max-width: 125px;
  display: flex;
  flex-wrap: wrap;
`;

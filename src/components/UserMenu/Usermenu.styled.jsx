import styled from 'styled-components';
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
export const P = styled.p`
  display: none;
  height: auto;
  flex-wrap: wrap;
  @media (min-width: 425px) {
    font-size: 16px;
    display: flex;
    margin-top: 5px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    margin: 0 20px;
  }
`;
export const WrapAvatarMail = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  IssuesCloseOutlined,
  LoginOutlined,
  HomeOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 80px;
    max-width: 1280px;
    gap: 30px;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  }
`;
export const Link = styled(NavLink)`
  outline: 1px solid #000000;
  border-radius: 5px;
  padding: 5px;
  &.active {
    @media (min-width: 320px) {
      outline: 1px solid #3a97e8;
    }
    color: #3a97e8;
    @media (min-width: 768px) {
      outline: none;
      border-radius: 0;
      border-top: 2px solid #3a97e8;
    }
  }
  text-decoration: none;
  color: inherit;
  @media (min-width: 768px) {
    outline: none;
    font-size: 18px;
    font-weight: 600;
    padding: 13px 4px;

    :nth-child(2n + 1) {
      margin-right: 20px;
    }
  }
`;
export const RegIcon = styled(IssuesCloseOutlined)`
  margin-right: 8px;
`;
export const LogInIcon = styled(LoginOutlined)`
  margin-right: 8px;
`;
export const HomeIcon = styled(HomeOutlined)`
  margin-right: 8px;
`;
export const ContactIcon = styled(ContactsOutlined)`
  margin-right: 8px;
`;
export const Header = styled.header`
  padding: 10px 0;

  @media (min-width: 768px) {
    border-bottom: 2px solid #3a97e8;
    padding: 0;
  }
`;
export const WrapHomeContact = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const WrapRegLogIn = styled.div`
  display: flex;
  justify-content: space-between;
`;

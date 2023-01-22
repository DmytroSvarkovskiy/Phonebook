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
  padding: 10px 0;
  row-gap: 20px;

  @media (min-width: 1280px) {
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
  &.active {
    color: #3a97e8;
    @media (min-width: 1280px) {
      border-top: 2px solid #3a97e8;
    }
  }
  text-decoration: none;
  color: inherit;
  @media (min-width: 1280px) {
    font-size: 18px;
    font-weight: 600;
    padding: 11px 4px;
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
  @media (min-width: 1280px) {
    border-bottom: 2px solid #3a97e8;
  }
`;

import styled from 'styled-components';
import { Button, Modal, Input, Spin } from 'antd';
import {
  UserSwitchOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const ButtonRedact = styled(Button)`
  margin-right: 20px;

  @media (min-width: 768px) {
    margin-left: auto;
  }
`;
export const Item = styled.li`
  @media (min-width: 320px) {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    background-color: #f5f6f7;
    border-radius: 7px;
    padding: 2px;
  }
  @media (min-width: 425px) {
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
export const UserIcon = styled(UserSwitchOutlined)`
  color: #c7c6c6;
`;
export const PhoneIcon = styled(PhoneOutlined)`
  color: #c7c6c6;
`;
export const InputForm = styled(Input)`
  height: 40px;
  font-size: 18px;
  width: 100%;
  :nth-child(1) {
    margin-bottom: 12px;
  }
`;
export const ModalRedact = styled(Modal)`
  text-align: center;
  .ant-modal-content {
    position: absolute;
    width: 290px;
    top: 600%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 768px) {
      width: 330px;
    }
  }
`;
export const UserIconList = styled(UserOutlined)`
  margin-right: 8px;
  color: #1677ff;
`;
export const PhoneiconList = styled(PhoneOutlined)`
  margin: 0 8px;
  color: #1677ff;
`;
export const DivName = styled.div`
  display: flex;
`;
export const Spiner = styled(Spin)`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Title = styled.h2`
  margin: 20px auto;
  color: #2e2d2dbc;
`;
export const Wrap = styled.div`
  padding: 20px 0;
`;
export const BtnWrap = styled.div`
  margin-right: auto;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
export const NameSpan = styled.span`
  @media (min-width: 768px) {
    width: 220px;
  }
`;

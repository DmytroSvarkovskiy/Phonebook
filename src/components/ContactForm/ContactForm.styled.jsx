import styled from 'styled-components';
import { Button, Form, Input, Modal } from 'antd';
import { PhoneOutlined, UserAddOutlined } from '@ant-design/icons';

export const FormWrap = styled(Form)`
  margin: 0 auto;
`;
export const AddModalBtn = styled(Button)`
  width: 100%;
  height: 35px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserIcon = styled(UserAddOutlined)`
  color: #c7c6c6;
`;
export const PhoneIcon = styled(PhoneOutlined)`
  color: #c7c6c6;
`;
export const InputForm = styled(Input)`
  height: 35px;
  font-size: 18px;
  width: 100%;
`;
export const AddModal = styled(Modal)`
  text-align: center;
  .ant-modal-content {
    position: absolute;
    width: 290px;
    top: 600%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 768px) {
      width: 340px;
      height: 225px;
    }
  }
`;
export const OpenAddModal = styled(Button)`
  margin: 15px 0;
`;

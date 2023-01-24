import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const Label = styled(Form.Item)`
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }

  label {
    width: 150px;
    padding-top: 8px;
  }
`;
export const Wrap = styled.div`
  padding-top: 10%;
  @media (min-width: 768px) {
    padding-left: 10%;
  }
  @media (min-width: 1280px) {
    padding-left: 25%;
  }
`;
export const FormReg = styled(Form)`
  width: 100%;
  @media (min-width: 768px) {
    width: 500px;
  }
`;
export const SubmitButton = styled(Button)`
  width: 100px;
  height: 40px;
  @media (min-width: 768px) {
    margin-left: 30%;
  }
  display: block;
  font-size: 18px;
`;
export const InputReg = styled(Input)`
  height: 40px;
  font-size: 18px;
`;
export const InputPassword = styled(Input.Password)`
  height: 40px;
  font-size: 18px;
`;
export const RegMail = styled(MailOutlined)`
  color: #c7c6c6;
`;
export const RegUser = styled(UserOutlined)`
  color: #c7c6c6;
`;
export const RegPassWord = styled(LockOutlined)`
  color: #c7c6c6;
`;
export const LinkToLog = styled(Link)`
  font-size: 18px;
  margin: 0 4px;
`;
export const ContLabel = styled.div`
  font-size: 18px;
  line-height: 1.11;
  position: absolute;
  top: -1%;
  left: 50%;
  @media (min-width: 768px) {
    margin-left: 60px;
  }
`;
export const TitleReg = styled.h2`
  color: #2e2d2dbc;
  margin-bottom: 15px;
  text-align: center;

  @media (min-width: 768px) {
    margin-left: 30%;
  }
`;

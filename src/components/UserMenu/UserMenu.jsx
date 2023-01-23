import { useSelector } from 'react-redux';
import { Avatar, Button } from 'antd';
import { Wrap, P, WrapAvatarMail } from './Usermenu.styled';
import { logOut } from 'Redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';
export const UserMenu = () => {
  const { email } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  return (
    <Wrap>
      <WrapAvatarMail>
        <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>
        <P>{email}</P>
      </WrapAvatarMail>
      <Button type="primary" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Log out
      </Button>{' '}
    </Wrap>
  );
};

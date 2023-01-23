import {
  Nav,
  Link,
  RegIcon,
  LogInIcon,
  HomeIcon,
  ContactIcon,
  Header,
  WrapHomeContact,
  WrapRegLogIn,
} from './AppBar.styled';
import { Spiner } from 'pages/ContactList/ContactList.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Container } from '../Container';

export const AppBar = () => {
  const { isLoaggedIn, isLoading } = useSelector(state => state.auth);
  return (
    <Header>
      {isLoading && <Spiner />}
      <Container>
        <Nav>
          <WrapHomeContact>
            <Link to="/">
              <HomeIcon />
              Home
            </Link>
            {isLoaggedIn && (
              <Link to="/contacts">
                <ContactIcon />
                Contacts
              </Link>
            )}
          </WrapHomeContact>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <WrapRegLogIn>
                <Link to="/register">
                  <RegIcon />
                  Register
                </Link>
                <Link to="/login">
                  <LogInIcon />
                  Log in
                </Link>
              </WrapRegLogIn>
            )}
          </div>
        </Nav>
      </Container>
    </Header>
  );
};

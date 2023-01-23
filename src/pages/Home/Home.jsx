import {
  Title,
  HomeUserGroup,
  WrapIcon,
  UnderTitle,
  HomeLink,
  Section,
  HomeEdit,
  HomePhoneIcon,
  HomeContactList,
} from './Home.styled';
import { Container } from 'components/Container';
import { useSelector } from 'react-redux';
export default function Home() {
  const { isLoaggedIn } = useSelector(state => state.auth);

  return (
    <Container>
      {' '}
      <Section>
        <Title>Wellcome to you PhoneBook</Title>
        <WrapIcon>
          {' '}
          <HomeEdit /> <HomePhoneIcon />
          <HomeUserGroup />
          <HomeContactList />
        </WrapIcon>
        {!isLoaggedIn ? (
          <UnderTitle>
            Please
            <HomeLink to="/register">Register</HomeLink>
            or
            <HomeLink to="/login">Log in</HomeLink>
            to be able to use your PhoneBook
          </UnderTitle>
        ) : (
          <UnderTitle>
            Go to the tab
            <HomeLink to="/contacts">Contacts</HomeLink>
            and manage your contacts
          </UnderTitle>
        )}
      </Section>
    </Container>
  );
}

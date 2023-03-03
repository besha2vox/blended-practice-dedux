import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  list-style: none;
  margin: 0;
`;

const UserLink = styled(Link)`
  text-decoration: none;
  color: #2e2e2e;

  &:hover,
  &:focus {
    color: blue;
  }
`;

const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <List>
      {users.map(({ name }) => (
        <li>
          <UserLink>{name}</UserLink>
        </li>
      ))}
    </List>
  );
};

export default UsersList;

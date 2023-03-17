import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { fetchUsers } from 'redux/operations';
import { useDispatch } from 'react-redux';

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

const UsersList = ({ filter }) => {
  const users = useSelector(selectUsers);
  const [filteredUsers, setFilteredUsers] = useState([...users]);
  const location = useLocation();
  console.log('location:', location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (filter === 'Filter from Z to A') {
      setFilteredUsers(users =>
        [...users].sort((a, b) => b.name.localeCompare(a.name))
      );
      return;
    }
    if (filter === 'Filter from A to Z') {
      setFilteredUsers(users =>
        [...users].sort((a, b) => a.name.localeCompare(b.name))
      );
      return;
    }
    setFilteredUsers(users);
  }, [filter, users]);

  return (
    <List>
      {filteredUsers.map(({ name, id }) => (
        <li key={id}>
          <UserLink to={id} state={{ from: location }}>
            {name}
          </UserLink>
        </li>
      ))}
    </List>
  );
};

export default UsersList;

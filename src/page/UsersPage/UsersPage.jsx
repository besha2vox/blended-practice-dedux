import Button from 'components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import UsersList from 'components/UsersList/UsersList';

const UsersPage = () => {
  const [isUsersShow, setIsUsersShow] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const showUsers = () => {
    setIsUsersShow(true);
    dispatch(fetchUsers());
  };

  return (
    <div>
      {!isUsersShow && (
        <Button text="show users" handlerButtonClick={showUsers} />
      )}
      {isUsersShow && !isLoading && <UsersList />}
    </div>
  );
};

export default UsersPage;

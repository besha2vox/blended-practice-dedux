import Button from 'components/Button/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import UsersList from 'components/UsersList/UsersList';

const UsersPage = () => {
  const [filterOrder, setFilterOrder] = useState('default');
  const users = useSelector(selectUsers);
  const [isUsersShow, setIsUsersShow] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const showUsers = () => {
    setIsUsersShow(true);
    dispatch(fetchUsers());
  };

  const filterBtnClickHandler = () => {
    switch (filterOrder) {
      case 'default':
        setFilterOrder('Filter from Z to A');
        break;
      case 'Filter from Z to A':
        setFilterOrder('Filter from A to Z');
        break;
      case 'Filter from A to Z':
        setFilterOrder('Filter from Z to A');
        break;

      default:
        return filterOrder;
    }
  };

  return (
    <div>
      {!isUsersShow && (
        <Button text="show users" handlerButtonClick={showUsers} />
      )}
      {isUsersShow && !isLoading && (
        <>
          <button onClick={filterBtnClickHandler} type="button">
            {filterOrder === 'default' ? 'Filter from A to Z' : filterOrder}
          </button>
          <UsersList />
        </>
      )}
    </div>
  );
};

export default UsersPage;

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import UsersList from 'components/UsersList/UsersList';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonFilter = styled.button`
  background-color: ${({ isActive }) => (isActive ? 'orangered' : 'inherit')};
`;

const UsersPage = () => {
  const [filterOrder, setFilterOrder] = useState('default');
  const isLoading = useSelector(selectIsLoading);

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
      <ButtonFilter
        isActive={filterOrder !== 'default'}
        onClick={filterBtnClickHandler}
        type="button"
      >
        {filterOrder === 'default' ? 'Filter from A to Z' : filterOrder}
      </ButtonFilter>
      <ButtonFilter
        disabled={filterOrder === 'default'}
        onClick={() => setFilterOrder('default')}
      >
        Disable filter
      </ButtonFilter>
      <UsersList filter={filterOrder} />
      <Link to="add">Add user</Link>
    </div>
  );

  // return <UsersList />;
};

export default UsersPage;

import Modal from 'components/Modal/Modal';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'redux/selectors';
import { fetchUserById } from 'redux/operations';

const UserDetaailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  const btnClickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {user && (
        <>
          <Link to={location.state.from}>Go back</Link>
          <img src={user.avatar} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.adress}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <button type="button" onClick={btnClickHandler}>
            Delete user
          </button>
          {isModalOpen && <Modal toggleModal={btnClickHandler} />}
        </>
      )}
    </>
  );
};

export default UserDetaailsPage;

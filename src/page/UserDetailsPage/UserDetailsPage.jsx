import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'redux/selectors';
import { fetchUserById } from 'redux/operations';
import { useEffect } from 'react';

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  return (
    <>
      <Link to="/users/">Go back</Link>
      <p>{user.name}</p>
      <p>{user.phone}</p>
      <p>{user.email}</p>
      <p>{user.adress}</p>
      <img src={user.avatar} alt={user.name} />
    </>
  );
};

export default UserDetailsPage;

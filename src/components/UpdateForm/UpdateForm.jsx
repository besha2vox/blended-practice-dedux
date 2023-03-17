import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUpdateUser } from 'redux/operations';
import { Form } from 'components/AddForm/AddForm';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const UpdateForm = () => {
  const { state } = useLocation();

  const [data, setData] = useState(state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const onChange = e => {
    const { name, value } = e.target;
    setData(state => ({ ...state, [name]: value }));
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch(fetchUpdateUser(data));
    navigate(`/users/${id}`);
  };

  return (
    <Form onSubmit={onSubmit}>
      <label>
        name
        <input onChange={onChange} type="text" name="name" value={data.name} />
      </label>
      <label>
        phone
        <input
          onChange={onChange}
          type="text"
          name="phone"
          value={data.phone}
        />
      </label>
      <label>
        adress
        <input
          onChange={onChange}
          type="text"
          name="adress"
          value={data.adress}
        />
      </label>
      <label>
        avatar
        <input
          onChange={onChange}
          type="url"
          name="avatar"
          value={data.avatar}
        />
      </label>
      <label>
        email
        <input
          onChange={onChange}
          type="email"
          name="email"
          value={data.email}
        />
      </label>
      <button type="submit">Update</button>
    </Form>
  );
};

export default UpdateForm;

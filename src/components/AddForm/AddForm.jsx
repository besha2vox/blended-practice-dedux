import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAddUser } from 'redux/operations';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 10px;

  & label {
    display: inherit;
    gap: 8px;
  }
`;

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const { name, phone, adress, avatar, email } = e.target.elements;
    const user = {
      name: name.value,
      phone: phone.value,
      adress: adress.value,
      avatar: avatar.value,
      email: email.value,
    };
    dispatch(fetchAddUser(user));
    navigate('/users');
  };

  return (
    <Form onSubmit={onSubmit}>
      <label>
        name
        <input type="text" name="name" />
      </label>
      <label>
        phone
        <input type="text" name="phone" />
      </label>
      <label>
        adress
        <input type="text" name="adress" />
      </label>
      <label>
        avatar
        <input type="url" name="avatar" />
      </label>
      <label>
        email
        <input type="email" name="email" />
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default AddForm;

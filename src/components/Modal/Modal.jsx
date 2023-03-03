import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDeleteUser } from 'redux/operations';

const modalRoot = document.getElementById('modalRoot');

const Modal = ({ toggleModal }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmBtnClickHandler = () => {
    dispatch(fetchDeleteUser(id));
    navigate('/users');
  };

  return createPortal(
    <div>
      <div>
        <p>Are you shure?</p>
        <ul>
          <li>
            <button type="button" onClick={confirmBtnClickHandler}>
              Confirm
            </button>
          </li>
          <li>
            <button type="button" onClick={() => toggleModal()}>
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

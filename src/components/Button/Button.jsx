const Button = ({ text, handlerButtonClick }) => {
  return (
    <button onClick={handlerButtonClick} type="button">
      {text}
    </button>
  );
};

export default Button;

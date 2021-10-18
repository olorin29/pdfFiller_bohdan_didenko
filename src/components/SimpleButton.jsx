const SimpleButton = (props) => {
  return (
    <button
      disabled={props.btnDisabled}
      className="simple-button"
      type="button"
    >
      View document
    </button>
  );
}

export default SimpleButton;

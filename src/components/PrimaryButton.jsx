const PrimaryButton = (props) => {
  return (
    <button
      disabled={props.btnDisabled}
      className="primary-button"
      type="button"
    >
      View document
    </button>
  );
}

export default PrimaryButton;

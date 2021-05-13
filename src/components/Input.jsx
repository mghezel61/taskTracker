const Input = ({ type, value, placeholder, id, cursor, onChange, checked }) => {
  // this.state = {value:''}
  if (type === "checkbox") {
    return (
      <>
        <input
          type={type}
          checked = {checked}
          value={value}
          placeholder={placeholder}
          id={id}
          style={{ cursor } && { cursor: cursor }}
          onChange={onChange}
        />
      </>
    );
  }
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        id={id}
        style={{ cursor } && { cursor: cursor }}
        onChange={onChange}
      />
    </>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "Enter your new task",
  id: "",
};
export default Input;

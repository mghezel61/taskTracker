const Input = ({ type, value, placeholder, id, cursor }) => {
    // this.state = {value:''}
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        id={id}
        style={{cursor} && {cursor:cursor}}
        // style={{cursor ? cursor:"pointer" : }}
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

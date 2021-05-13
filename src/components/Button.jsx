import PropTypes from "prop-types";

const Button = ({ title, bgColor, color, onClick, className }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={className}
        style={{ color: color, backgroundColor: bgColor }}
      >
        {title}
      </button>
    </>
  );
};

Button.defaultProps = {
  color: "steelblue",
  bgColor: "black",
  title: "Add",
  className: "btn",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;

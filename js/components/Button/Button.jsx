import React from "react";
import PropTypes from "prop-types";

function Button({ children, onClick = () => {}, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;

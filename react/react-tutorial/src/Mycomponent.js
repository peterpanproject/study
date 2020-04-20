import React from "react";
import PropTypes from "prop-types";

const Mycomponent = ({ name, favoriteNumber, children }) => {
  return (
    <>
      <div>이름 {name}</div>
      <div>값 {children}</div>
      <div>숫자{favoriteNumber}</div>
    </>
  );
};

Mycomponent.defaultProps = {
  name: "기본이름",
};
Mycomponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default Mycomponent;

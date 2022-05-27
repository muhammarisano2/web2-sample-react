import React from "react";
import PropTypes from 'prop-types'
const Input = ({label, id,  ...props}) => {
console.log(props);
  // const dataInput = {
  //   name: 'product',
  //   placeholder: 'masukan nama product baru'
  // }

  return (
      <div>
        <label><span>{label}</span>
          <input className="form-control" {...props}/>
        </label>
      </div>
  );
};

Input.defaultProps = {
  label: 'silahkan isi form ini'
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func

}
export default Input;

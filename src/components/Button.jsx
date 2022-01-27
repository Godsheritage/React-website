import '../index.css'
import PropTypes from 'prop-types';


const Button = ({text}) => {
    const btnStyles = {
        color:'black',
        padding:'.5rem',
        width:'5rem',
    }
  return <div>
      <button style = {btnStyles}>{text}</button>
  </div>;
};


Button.defaultProps = {
    text:'click me'
}
Button.propTypes = {
    text:PropTypes.string
}

export default Button;





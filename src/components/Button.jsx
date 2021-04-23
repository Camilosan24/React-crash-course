import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
	return (
		<button className={`btn ${color}`} onClick={onClick}>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "steelblue",
};

Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};
export default Button;

import React from 'react';
import '../styles/components/options.css';

const Option = (props) => {
	return (
		<div className="option">
			<p className="option__text">{props.count}. {props.optionText}</p>
			<button className="btn btn--link"onClick={(e) => {props.handleDeleteOption(props.optionText);}}
			>Remove</button>
		</div>
	);
};

export default Option;
import React from 'react';
import '../styles/components/action.css';

const Action = (props) => {
	return (
		<div>
			<button className="big-btn" onClick={props.handlePick}
			disabled={!props.hasOptions}>
			What should I do?</button>
		</div>
	);
};

export default Action;

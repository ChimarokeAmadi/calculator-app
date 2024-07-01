import React from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
	return (
		<div>
			<label class='switch'>
				<input type='checkbox' />
				<span class='slider round'></span>
			</label>
		</div>
	);
};

export default ToggleButton;

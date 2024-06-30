import React from "react";

const BlueButton = (props) => {
	return (
		<button
			className=' rounded-[24px] dark-grey w-full text-[32px] h-[72px] text-text bg-blue-color'
			id={props.id}
			onClick={props.onClick}>
			{props.content}
		</button>
	);
};

export default BlueButton;

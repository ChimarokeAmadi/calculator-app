import React from "react";

const NumberButton = (props) => {
	return (
		<button
			className=' rounded-[24px] dark-grey w-full text-[32px] h-[72px] text-text bg-btn flex justify-center items-center'
			id={props.id}
			onClick={props.onClick}>
			{props.content}
		</button>
	);
};

export default NumberButton;

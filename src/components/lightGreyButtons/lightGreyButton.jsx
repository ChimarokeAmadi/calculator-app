import React from "react";
const LightGreyButton = (props) => {
	return (
		<button
			className=' rounded-[24px] dark-grey w-full h-[72px] text-[32px] text-text dark:text-text2 bg-light-grey dark:bg-light-grey2 flex justify-center items-center'
			id={props.id}
			onClick={props.onClick}>
			{props.content}
		</button>
	);
};

export default LightGreyButton;

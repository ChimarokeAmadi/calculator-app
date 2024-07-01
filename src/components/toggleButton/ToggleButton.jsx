import React from "react";
import "./ToggleButton.css";

const ToggleButton = (props) => {
	return (
		<div>
			<label className='switch '>
				<input type='checkbox' />
				<span
					className='slider  before:bg-light-grey dark:before:bg-light-grey2 round flex items-center justify-between gap-3 py-1 px-2 min-w-fit'
					onClick={props.onClick}>
					<img
						src='/public/assets/images/Union2.png'
						alt=''
						className='h-4 w-4'
					/>
					<img
						src='public/assets/images/Union.png'
						alt=''
						className='h-4 w-4'
					/>
				</span>
			</label>
		</div>
	);
};

export default ToggleButton;

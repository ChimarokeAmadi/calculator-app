import React from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
	return (
		<div>
			<label className='switch '>
				<input type='checkbox' />
				<span className='slider round flex items-center justify-between gap-3 py-1 px-2 min-w-fit '>
					<img
						src='public/assets/images/Union2.png'
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

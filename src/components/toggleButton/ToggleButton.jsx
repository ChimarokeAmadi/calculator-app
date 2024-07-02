import React from "react";
import "./ToggleButton.css";

const ToggleButton = (props) => {
	return (
		<div className='flex justify-center'>
			<label className='switch '>
				<input type='checkbox' className='flex' />
				<span
					className='slider  before:bg-light-grey dark:before:bg-light-grey2 round bg-[#2E2F38] dark:bg-white flex items-center justify-between gap-3 py-1 px-2 min-w-fit'
					onClick={props.onClick}>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M11 0V1V3V4H9V3V1V0H11ZM0 9H1H3H4V11H3H1H0V9ZM17 9H16V11H17H19H20V9H19H17ZM11 16V17V19V20H9V19V17V16H11ZM15.6568 17.0711L16.364 17.7782L17.7782 16.364L17.0711 15.6569L15.6568 14.2427L14.9497 13.5356L13.5355 14.9498L14.2426 15.6569L15.6568 17.0711ZM5.05023 6.46451L4.34312 5.7574L2.92891 4.34319L2.2218 3.63608L3.63602 2.22187L4.34313 2.92897L5.75734 4.34319L6.46445 5.05029L5.05023 6.46451ZM17.0711 4.34309L17.7782 3.63599L16.364 2.22177L15.6568 2.92888L14.2426 4.34309L13.5355 5.0502L14.9497 6.46441L15.6568 5.75731L17.0711 4.34309ZM6.46445 14.9497L5.75734 15.6568L4.34312 17.071L3.63602 17.7781L2.2218 16.3639L2.92891 15.6568L4.34313 14.2426L5.05023 13.5355L6.46445 14.9497ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10ZM10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6Z'
							fill='#4B5EFC'
						/>
					</svg>

					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M5.03239 3.23186C3.2001 4.49474 2 6.60797 2 8.99992C2 12.8659 5.13401 15.9999 9 15.9999C11.3918 15.9999 13.5049 14.8 14.7679 12.9678C14.5146 12.9893 14.2585 13.0002 14 13.0002C9.02944 13.0002 5 8.97075 5 4.00019C5 3.7415 5.01094 3.48524 5.03239 3.23186ZM0 8.99992C0 5.04173 2.55459 1.68279 6.10211 0.476929L7.37072 1.74561C7.13064 2.45177 7 3.20969 7 4.00019C7 7.86618 10.134 11.0002 14 11.0002C14.7904 11.0002 15.5482 10.8696 16.2542 10.6296L17.5228 11.8983C16.3168 15.4456 12.958 17.9999 9 17.9999C4.02944 17.9999 0 13.9705 0 8.99992Z'
							fill='#4B5EFC'
						/>
					</svg>
				</span>
			</label>
		</div>
	);
};

export default ToggleButton;

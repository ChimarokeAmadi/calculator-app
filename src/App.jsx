"use client";
import { useEffect, useState } from "react";
import "./App.css";
import BlueButton from "./components/bluebuttons/blueButton";
import LightGreyButton from "./components/lightGreyButtons/lightGreyButton";
import NumberButton from "./components/numberButton/numberButton";
import ToggleButton from "./components/toggleButton/ToggleButton";

function App() {
	const [outputDisplay, setOutputDisplay] = useState("0");
	const [inputDisplay, setInputDisplay] = useState("0");
	const [darkMode, setDarkMode] = useState(undefined);

	useEffect(() => {
		const darkModeData = window.localStorage.getItem("CALCULATOR_DARK_MODE");
		if (darkModeData !== null) setDarkMode(JSON.parse(darkModeData));
		console.log(darkModeData);
	}, []);

	useEffect(() => {
		if (darkMode !== undefined) {
			window.localStorage.setItem(
				"CALCULATOR_DARK_MODE",
				JSON.stringify(darkMode)
			);
		}
	}, [darkMode]);

	const handleToggle = () => {
		setDarkMode(darkMode ? false : true);
	};

	const calculate = (event) => {
		const button = event.target.id;
		const operators = ["-", "+", "÷", "×"];
		if (button == "clear") {
			setOutputDisplay("0");
			setInputDisplay("0");
		} else if (button == "equals") {
			setInputDisplay("0");
			setOutputDisplay(
				eval(inputDisplay.replace(/×/g, "*").replace(/÷/g, "/"))
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			);
		} else if (button == "subtract") {
			setOutputDisplay(event.target.innerHTML);
			if (inputDisplay[inputDisplay.length - 1] != event.target.innerHTML) {
				if (operators.includes(inputDisplay[inputDisplay.length - 1])) {
					if (operators.includes(inputDisplay[inputDisplay.length - 2])) {
						setInputDisplay(inputDisplay.slice(0, -2) + event.target.innerHTML);
					} else {
						setInputDisplay(inputDisplay.slice(0, -1) + event.target.innerHTML);
					}
				} else {
					setInputDisplay(inputDisplay + event.target.innerHTML);
				}
			}
		} else if (button == "add" || button == "multiply" || button == "divide") {
			setOutputDisplay(event.target.innerHTML);
			if (operators.includes(inputDisplay[inputDisplay.length - 1])) {
				if (operators.includes(inputDisplay[inputDisplay.length - 2])) {
					setInputDisplay(inputDisplay.slice(0, -2) + event.target.innerHTML);
				} else {
					setInputDisplay(inputDisplay.slice(0, -1) + event.target.innerHTML);
				}
			} else {
				setInputDisplay(inputDisplay + event.target.innerHTML);
			}
		} else if (operators.includes(outputDisplay)) {
			if (button == "decimal") {
				setOutputDisplay("0" + event.target.innerHTML);
				setInputDisplay(inputDisplay + "0" + event.target.innerHTML);
			} else {
				setOutputDisplay(event.target.innerHTML);
				setInputDisplay(inputDisplay + event.target.innerHTML);
			}
		} else if (outputDisplay == "0" && button != "decimal") {
			setOutputDisplay(event.target.innerHTML);
			if (inputDisplay == "0") {
				setInputDisplay(event.target.innerHTML);
			} else {
				setInputDisplay(inputDisplay + event.target.innerHTML);
			}
		} else if (button == "decimal") {
			if (outputDisplay.includes(".")) {
				return;
			}
			setOutputDisplay(outputDisplay + event.target.innerHTML);
			setInputDisplay(inputDisplay + event.target.innerHTML);
		} else if (button != "decimal" && !operators.includes(outputDisplay)) {
			setOutputDisplay(outputDisplay + event.target.innerHTML);
			setInputDisplay(inputDisplay + event.target.innerHTML);
		}
	};

	return (
		<div
			data-mode={darkMode ? "dark" : "light"}
			className=' dark:bg-background2 bg-background h-full w-full'>
			<div className='container mx-auto  h-[902px] min-[375px]:h-[750px]  px-5 w-full min-[768px]:h-[1024px] min-[768px]:w-[768px] bg-background flex flex-col justify-between items-center  pt-[15px] min-[768px]:pt-[60px] font-work dark:bg-background2 pb-[66px] min-[390px]:pt-[20px] min-[400px]:h-[916px] min-[390px]:h-[864px] min-[430px]:h-[952px]'>
				<div className='min-[768px]:mb-[267px] mx-auto flex justify-center w-full'>
					<ToggleButton onClick={handleToggle} />
				</div>
				<div className='min-[768px]:w-[728px] w-full flex flex-col gap-4'>
					<div className='output w-full text-right text-light-grey dark:text-light-grey2 text-[40px] leading-[46.92px]'>
						{inputDisplay}
					</div>
					<div className='output w-full text-right text-text dark:text-text2 text-[96px] leading-[96px]'>
						{outputDisplay}
					</div>

					<div className='buttons mx-auto min-[768px]:w-[728px] w-full grid grid-cols-[1fr,1fr,1fr,1fr] gap-4'>
						<LightGreyButton content='C' id='clear' onClick={calculate} />
						<LightGreyButton
							// onClick={calculate}
							id='positiveNegative'
							content=<svg
								width='24'
								height='22'
								viewBox='0 0 24 22'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M18.8321 2.5547L19.3867 1.72265L17.7226 0.613251L17.1679 1.4453L5.16795 19.4453L4.61325 20.2774L6.27735 21.3868L6.83205 20.5547L18.8321 2.5547ZM5 1V2V4H7H8V6H7H5V8V9H3V8V6H1H0V4H1H3V2V1H5ZM17 16H16V18H17H23H24V16H23H17Z'
									fill={darkMode ? "black" : "white"}
								/>
							</svg>
						/>
						<LightGreyButton content='%' id='percent' />
						<BlueButton content='÷' id='divide' onClick={calculate} />
						<NumberButton content='7' id='seven' onClick={calculate} />
						<NumberButton content='8' id='eight' onClick={calculate} />
						<NumberButton content='9' id='nine' onClick={calculate} />
						<BlueButton content='×' id='multiply' onClick={calculate} />
						<NumberButton content='4' id='four' onClick={calculate} />
						<NumberButton content='5' id='five' onClick={calculate} />
						<NumberButton content='6' id='six' onClick={calculate} />
						<BlueButton content='-' id='subtract' onClick={calculate} />
						<NumberButton content='1' id='one' onClick={calculate} />
						<NumberButton content='2' id='two' onClick={calculate} />
						<NumberButton content='3' id='three' onClick={calculate} />
						<BlueButton content='+' id='add' onClick={calculate} />
						<NumberButton content='.' id='decimal' onClick={calculate} />
						<NumberButton content='0' id='zero' onClick={calculate} />
						<NumberButton
							onClick={calculate}
							id='delete'
							content=<svg
								width='27'
								height='18'
								viewBox='0 0 27 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M9.58578 0H10H26H27V1V17V18H26H10H9.58578L9.29289 17.7071L1.29289 9.70711L0.585785 9L1.29289 8.29289L9.29289 0.292893L9.58578 0ZM10.4142 2L3.41421 9L10.4142 16H25V2H10.4142ZM14 4.58578L14.7071 5.29288L17 7.58578L19.2929 5.29289L20 4.58579L21.4142 6L20.7071 6.70711L18.4142 9L20.7071 11.2929L21.4142 12L20 13.4142L19.2929 12.7071L17 10.4142L14.7071 12.7071L14 13.4142L12.5858 12L13.2929 11.2929L15.5858 9L13.2929 6.7071L12.5858 5.99999L14 4.58578Z'
									fill={darkMode ? "black" : "white"}
								/>
							</svg>
						/>
						<BlueButton content='=' id='equals' onClick={calculate} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

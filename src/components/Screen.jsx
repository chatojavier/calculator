import { useContext, useState, useRef, useEffect } from 'react';
import ValueContext from '../context/ValueContext';

function Screen() {
	const { resultState } = useContext(ValueContext);
	const [fontSize, setFontSize] = useState(3);
	const screenNumbersRef = useRef();
	const screenRef = useRef();
	useEffect(() => {
		if (
			screenNumbersRef.current.offsetWidth >
			screenRef.current.offsetWidth - 32
		) {
			const newFontSize = fontSize - 0.3;
			screenNumbersRef.current.style.fontSize = newFontSize + 'rem';
			setFontSize(newFontSize);
		} else if (
			screenNumbersRef.current.offsetWidth <
			screenRef.current.offsetWidth * 0.5
		) {
			const newFontSize = 3;
			screenNumbersRef.current.style.fontSize = newFontSize + 'rem';
			setFontSize(newFontSize);
		}
	}, [resultState]);
	return (
		<div ref={screenRef} className='Screen'>
			<span ref={screenNumbersRef} className='Screen__numbers'>
				{resultState.currentValue}
			</span>
		</div>
	);
}

export default Screen;

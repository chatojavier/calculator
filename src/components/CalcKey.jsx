import { useContext } from 'react';
import ValueContext from '../context/ValueContext';

function CalcKey({ children, color, cols, kind, operator }) {
	const { setResultState } = useContext(ValueContext);
	const handleKeyClick = () => {
		setResultState({ type: kind, newKeyValue: children, operator });
	};
	return (
		<button
			className={`CalcKey ${
				color === 'darkGrey'
					? 'bg-darkgrey'
					: color === 'lightGrey'
					? 'bg-lightgrey'
					: 'bg-orange'
			} ${cols === 2 ? 'grid-cols-2' : ''} ${
				operator === 'div' ||
				operator === 'mult' ||
				operator === 'sub' ||
				operator === 'sum'
					? 'focus-grey'
					: ''
			}`}
			onClick={handleKeyClick}>
			{children}
		</button>
	);
}

export default CalcKey;

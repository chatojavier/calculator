import CalcKey from './CalcKey';

function Keyboard() {
	return (
		<div className='Keyboard'>
			<CalcKey kind='ac' color='darkGrey' cols={1}>
				AC
			</CalcKey>
			<CalcKey
				kind='operation'
				operator='negative'
				color='darkGrey'
				cols={1}>
				+/-
			</CalcKey>
			<CalcKey
				kind='operation'
				operator='percent'
				color='darkGrey'
				cols={1}>
				%
			</CalcKey>
			<CalcKey kind='operation' operator='div' color='orange' cols={1}>
				÷
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				7
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				8
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				9
			</CalcKey>
			<CalcKey kind='operation' operator='mult' color='orange' cols={1}>
				x
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				4
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				5
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				6
			</CalcKey>
			<CalcKey kind='operation' operator='sub' color='orange' cols={1}>
				-
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				1
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				2
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				3
			</CalcKey>
			<CalcKey kind='operation' operator='sum' color='orange' cols={1}>
				+
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={2}>
				0
			</CalcKey>
			<CalcKey kind='number' color='lightGrey' cols={1}>
				.
			</CalcKey>
			<CalcKey kind='result' color='orange' cols={1}>
				=
			</CalcKey>
		</div>
	);
}

export default Keyboard;

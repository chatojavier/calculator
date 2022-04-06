import { useReducer } from 'react';
import decimalCount from '../utils/decimalCount';

const useOperation = (initialValue) => {
	const [operationState, operationDispatch] = useReducer(operationsReducer, {
		currentValue: initialValue,
		totalValue: null,
		operator: null,
		newNumber: true,
	});

	return [operationState, operationDispatch];
};

export default useOperation;

const operationsReducer = (state, action) => {
	let newCurrentValue;
	switch (action.type) {
		case 'number':
			if (state.newNumber && action.newKeyValue !== '.') {
				return {
					...state,
					currentValue: action.newKeyValue,
					newNumber: false,
				};
			}
			if (state.newNumber && action.newKeyValue === '.') {
				return {
					...state,
					currentValue: '0.',
					newNumber: false,
				};
			}
			if (
				action.newKeyValue === '.' &&
				state.currentValue.includes('.')
			) {
				return { ...state };
			}
			newCurrentValue = state.currentValue + action.newKeyValue;
			return {
				...state,
				currentValue: newCurrentValue,
				newNumber: false,
			};
		case 'ac':
			return {
				...state,
				currentValue: '0',
				totalValue: null,
				operator: null,
				newNumber: true,
			};
		case 'operation':
			if (
				action.operator === 'percent' ||
				action.operator === 'negative'
			) {
				if (state.operator) {
					newCurrentValue = operation(
						state.operator,
						state.totalValue,
						state.currentValue
					);
					newCurrentValue = operation(
						action.operator,
						newCurrentValue
					);
				} else {
					newCurrentValue = operation(
						action.operator,
						state.currentValue
					);
				}
				return {
					...state,
					currentValue: newCurrentValue,
					totalValue: newCurrentValue,
					operator: null,
					newNumber: true,
				};
			}
			if (state.newNumber) return { ...state, operator: action.operator };
			if (state.operator === null) {
				return {
					...state,
					totalValue: state.currentValue,
					operator: action.operator,
					newNumber: true,
				};
			}
			newCurrentValue = operation(
				state.operator,
				state.totalValue,
				state.currentValue
			);
			return {
				...state,
				currentValue: newCurrentValue,
				totalValue: newCurrentValue,
				operator: action.operator,
				newNumber: true,
			};
		case 'result':
			if (state.operator === null) {
				return { ...state, newNumber: true };
			}
			newCurrentValue = operation(
				state.operator,
				state.totalValue,
				state.currentValue
			);
			return {
				...state,
				currentValue: newCurrentValue,
				totalValue: newCurrentValue,
				operator: null,
				newNumber: true,
			};
		default:
			return { ...state };
	}
};

const operation = (operator, firstNum, secondNum) => {
	let newNum;
	switch (operator) {
		case 'div':
			newNum = Number(firstNum) / Number(secondNum);
			return decimalCount(newNum) > 4 ? newNum.toFixed(4) : newNum;
		case 'mult':
			newNum = Number(firstNum) * Number(secondNum);
			return decimalCount(newNum) > 4 ? newNum.toFixed(4) : newNum;
		case 'sub':
			newNum = Number(firstNum) - Number(secondNum);
			return decimalCount(newNum) > 4 ? newNum.toFixed(4) : newNum;
		case 'sum':
			newNum = Number(firstNum) + Number(secondNum);
			return decimalCount(newNum) > 4 ? newNum.toFixed(4) : newNum;
		case 'percent':
			return Number(firstNum) / 100;
		case 'negative':
			return Number(firstNum) * -1;
	}
};

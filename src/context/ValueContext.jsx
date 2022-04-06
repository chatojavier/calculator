import { createContext } from 'react';

export default createContext({
	operationState: '',
	operationDispatch: (action) => {},
});

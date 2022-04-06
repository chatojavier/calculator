import useOperation from './hooks/useOperation';
import './App.css';
import ValueContext from './context/ValueContext';
import Screen from './components/Screen';
import Keyboard from './components/KeyBoard';

function App() {
	const [resultState, setResultState] = useOperation('0');
	return (
		<>
			<header>
				<h1>Calculator</h1>
			</header>
			<div className='App'>
				<ValueContext.Provider
					value={{
						resultState,
						setResultState,
					}}>
					<Screen></Screen>
					<Keyboard></Keyboard>
				</ValueContext.Provider>
			</div>
		</>
	);
}

export default App;

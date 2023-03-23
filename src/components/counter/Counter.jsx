import { useState } from 'react';

/*
  const state = undefined

  const setState = (newValue) =>{
    state = newValue
  } 

  const useState = (initialValue) =>{
    setState(initialValue)
    return [state, setState]
  }

*/

const Counter = () => {
	const [counter, setCounter] = useState(0);
	const [step, setStep] = useState(1);

	const handleCounter = () => {
		setCounter(counter + step);
		console.log(counter);
	};

	const handleStep = () => {
		setStep(step + 1);
		console.log(step);
	};

	return (
		<div>
			<h1>Counter: {counter}</h1>
			<h2>Step: {step}</h2>
			<button onClick={handleCounter}>Increment Counter</button>
			<button onClick={handleStep}>Increment Step</button>
		</div>
	);
};

export default Counter;

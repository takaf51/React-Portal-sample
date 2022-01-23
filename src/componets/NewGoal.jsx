import React,{useState, useRef} from 'react'
import Modal from './modal/Modal'

const NewGoal = ({addNewGoal}) => {
	const [isValidated, setIsValidated] = useState(true);
	const goalInputRef = useRef('');

	const discardErrorHandler = () => {
		setIsValidated(true)
	}

	const submitHandler = event => {
		event.preventDefault();
		setIsValidated(false);
		if(goalInputRef.current.value.trim().length===0) return;
		setIsValidated(true);
		addNewGoal(goalInputRef.current.value);
		goalInputRef.current.value = '';
	}
	return (
	<div className='px-5 py-10 border-2 rounded-lg mb-10 w-8/12 shadow-lg'>
		<form onSubmit={submitHandler}>
			<div className='flex flex-col flex-wrap items-start ml-3'>
				<label className='text-xl font-bold mb-2'>Course Goal</label>
				<input type='text' ref={goalInputRef} className='text-lg w-full max-w-full p-0.5 rounded-sm border-2 mb-3 focus:bg-pink-200 '/>
				<button type='submit' className='bg-pink-700 px-7 py-2 text-white font-semibold text-lg'>Add Goal</button>
			</div>
		</form>
		{!isValidated && <Modal discardError={discardErrorHandler}/>}
	</div>
	);
}

export default NewGoal


/*
		Controlled
*/
//<input type='text' ref={goalInputRef} value={newGoal} onChange={goalInputHandler} 
/*

	const [newGoal, setNewGoal] = useState('');
	const goalInputHandler = event => {
		setNewGoal(event.target.value);
		if(newGoal!='') setIsValidated(true);
	}
	const submitHandler = event => {
		event.preventDefault();
		setIsValidated(false);
		if(newGoal==='') return;
		setIsValidated(true);
		addNewGoal(newGoal);
		setNewGoal('');
	}
	*/
import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({discardError}) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop discardError={discardError}/>, document.getElementById('back-drop'))}
			{ReactDOM.createPortal(<ModalOverlay discardError={discardError}/>, document.getElementById('modal-root'))}
		</>
	);
}

const Backdrop = ({discardError}) => {
	return <div onClick={discardError} className='z-1 fixed top-0 left-0 h-screen w-screen'/>;
}

const ModalOverlay = ({discardError}) => {
	return (
		<div className='z-20 fixed top-0 left-0 backdrop-blur-sm bg-opacity-80 bg-gray-800 h-screen w-screen flex flex-wrap content-center justify-center pointer-events-none '>
			<div className='flex flex-wrap flex-col w-64 h-36 bg-red-200 rounded-xl overflow-hidden shadow-lg  pointer-events-auto'>
				<p className='w-full bg-purple-900 text-white p-3 text-xl font-bold'>Invalid Input</p>
				<p className='p-3'>Please Input Any Goal. </p>
				<button onClick={discardError} className='w-max px-3 py-1 bg-purple-600 text-white self-end mr-3 rounded-lg'>OK</button>
			</div>
		</div>
	);
}

export default Modal
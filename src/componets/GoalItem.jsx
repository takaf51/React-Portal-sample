import React from 'react'

const GoalItem = ({goal, onClick, id}) => {
	const clickHandler = e => {
		onClick(e.target.getAttribute('id'));
	}
	return <li onClick={clickHandler} id={id} className='bg-pink-700 px-8 py-5 w-full text-white text-lg'>{goal}</li>
}

export default GoalItem
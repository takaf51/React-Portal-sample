import React from 'react'
import GoalItem from './GoalItem'

const GoalList = ({goals, deleteGoal}) => {
	const onClickHandler = index => {
		deleteGoal(index);
		console.log(index);
	}
	return <ul className='flex flex-col flex-wap gap-5 items-start w-9/12'>
		{goals.map((item, index) => (<GoalItem key={index} id={index} goal={item.goal} onClick={onClickHandler}/>))}
	</ul>
}

export default GoalList
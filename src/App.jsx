import React, {useState} from 'react'
import NewGoal from './componets/NewGoal'
import GoalList from './componets/GoalList'

export const App = () => {
	const [goals, setGoals] = useState(INIT_DATA);

	const addNewGoal = goal => {
		setGoals((prevGoals) => [{goal: goal}, ...prevGoals]);
	}

	const deleteGoalAt = place => {
		setGoals((prevGoals)=>(prevGoals.filter((val, index)=> (index!=place))));
	}

	return (
	<div className='flex flex-col flex-wrap items-center mt-10'>
		<NewGoal addNewGoal={addNewGoal}/>
		<GoalList goals={goals} deleteGoal={deleteGoalAt}/>
	</div>
	);
}


const INIT_DATA = [
		{goal: 'Do all execises!'},
		{goal: 'Finish the course!'}
	]
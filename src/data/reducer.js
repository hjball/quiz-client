export default (state, action) => {
	switch(action.type) {
		case 'setCategories' : return setCategories(state, action);
		case 'setQuiz' : return setQuiz(state, action);
		default: return state;
	}
}

const setCategories = (state, { categories }) => {
	return {
		...state,
		categories: categories,
	}
}

const setQuiz = (state, { quiz }) => {
	console.log("REDUCER QUIZ:", quiz);
	return {
		...state,
		quiz: quiz,
	}
}
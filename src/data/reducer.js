export default (state, action) => {
	switch(action.type) {
		case 'setCategories' : return setCategories(state, action);
		case 'setQuestions' : return setQuestions(state, action);
		default: return state;
	}
}

const setCategories = (state, { categories }) => {
	return {
		...state,
		categories: categories,
	}
}

const setQuestions = (state, { quiz }) => {
	return {
		...state,
		questions: quiz,
	}
}
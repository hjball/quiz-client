export default (state, action) => {
	switch(action.type) {
		case 'setCategories' : return setCategories(state, action);
		default: return state;
	}
}

const setCategories = (state, { categories }) => {
	return {
		...state,
		categories: categories,
	}
}
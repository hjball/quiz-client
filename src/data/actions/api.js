import axios from '../../axios';

import { setCategories } from './state';
import { setQuiz } from './state';

export const getCategories = () => dispatch => {
	axios.get("/categories").then(({ data }) => {
		const categories = data.data;
		dispatch(setCategories(categories));
	})
};

export const getQuiz = () => (dispatch, getState) => {
	axios.post("/quiz", {
		cat_id: 1,
	}).then(({ data }) => {
	const quiz = data.data;
	console.log(quiz);
	dispatch(setQuiz(quiz));
	});
}

// getState().category_id
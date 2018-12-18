import axios from '../../axios';

import { setCategories } from './state';

export const getCategories = () => dispatch => {
	axios.get("/categories").then(({ data }) => {
		const categories = data.data;
		dispatch(setCategories(categories));
	})
};
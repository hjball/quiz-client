export const setCategories = categories => {
	return {
		type: "setCategories",
		categories: categories,
	}
}

export const setQuiz = quiz => {
	return {
		type: "setQuiz",
		quiz: quiz,
	}
}
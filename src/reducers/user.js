let Initialization = {
	data : [],
	tab : 1
}

export function user(state = Initialization , action) {
	switch (action.type) {
		case 'USER_CENTER':
			return Object.assign({},state,{
				data : action.data
			})
		case 'SET_TAB':
			return Object.assign({},state,{
				tab : action.tab
			})
		default:
			return state
	}
}
let Initialization = {
	data : [],
	num : 0,
	tab : 1
}

export function message(state = Initialization , action) {
	switch (action.type) {
		case 'MESSAGE_CENTER':
			return Object.assign({},state,{
				data : action.data
			})
		case 'SET_TABM':
			return Object.assign({},state,{
				tab : action.tab
			})
		case 'MESSAGE_NUM':
			return Object.assign({},state,{
				num : action.num
			})
		default:
			return state
	}
}
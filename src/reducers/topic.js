// 初始化状态
let initNavList = {
	isFecthing: false,
	data: {}
}

export function topic(state = initNavList, action) {
	switch (action.type) {
		case 'REQUEST_ARTICLE':
			return Object.assign({},state,{
				isFecthing : true
			})
		case 'RECEIVE_ARTICLE':
			return Object.assign({},state,{
				data : action.data,
				isFecthing : false
			})
		default:
			return state
	}
}
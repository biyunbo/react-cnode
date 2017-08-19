// 初始化状态
let initNavList = {
    selectedTab: 'all',
	tabData: {
		page: 0,
		limit: 0,
		topics: []
	}
}

export function indexList(state = initNavList, action) {
	switch (action.type) {
		case 'SELECT_TAB':
			return Object.assign({},state,{
				selectedTab : action.tab
			})
		case 'RECEIVE_TOPICS':
			return Object.assign({},state,{
				tabData:{
					page : action.page,
					topics : action.topics,
					limit : action.limit
				}
			})
		default:
			return state
	}
}
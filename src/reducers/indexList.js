// 初始化状态
let Initialization = {
    selectedTab: 'all',
	tabData: {
		page: 0,
		limit: 0,
		scrollT: 0,
		topics: [],
		isFecthing: false
	}
}

export function indexList(state = Initialization, action) {
	switch (action.type) {
		case 'SELECT_TAB':
			return Object.assign({},state,{
				selectedTab : action.tab,
				tabData : {
					...state.tabData,
					topics: []
				}
			})
		case 'RECORD_SCROLLT':
			return Object.assign({},state,{
				tabData : {
					...state.tabData,
					scrollT : action.scrollT
				}
			})
		case 'REQUEST_TOPICS':
			//请求开始
			return Object.assign({},state,{
				tabData : {
					...state.tabData,
					isFecthing : true
				}
			})
		case 'RECEIVE_TOPICS':
			return Object.assign({},state,{
				tabData:{
					page : action.page,
					topics : action.topics,
					limit : action.limit,
					isFecthing : false
				}
			})
		default:
			return state
	}
}
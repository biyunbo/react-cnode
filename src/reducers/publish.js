let Initialization = {
	tab : "dev",
	title : "",
	content : "",
	success : false,
	topic_id : ""
}

export function publish(state = Initialization , action) {
	switch (action.type) {
		case 'RECEIVE_PUBLISHTOPIC':
			return Object.assign({},state,{
				success : action.success,
				topic_id : action.topic_id
			})
		case 'PUBLISH_TAB':
			return Object.assign({},state,{
				tab : action.tab
			})
		case 'PUBLISH_TITLE':
			return Object.assign({},state,{
				title : action.title
			})
		case 'PUBLISH_CONTENT':
			return Object.assign({},state,{
				content : action.content
			})	
		default:
			return state
	}
}
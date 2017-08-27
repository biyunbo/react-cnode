import instance from 'utils/instance';

export const receivePublishTopic = (success, topic_id) => ({
	type: 'RECEIVE_PUBLISHTOPIC',
	success,
	topic_id
})

export const postPublishTopics = (accesstoken ,tab , title,content ) => async (dispatch ,getState) =>{
	try {
		let data = {"accesstoken":accesstoken,"tab":tab,"content":content,"title":title}
		let response = await instance.post(`/topics/`,data)
		await response.data.success && dispatch(receivePublishTopic(response.data.success, response.data.topic_id))
		console.log(response)
	} catch(error) {
		console.log('error: ', error)
	}
}

export const publishTab = (tab) =>({
	type : "PUBLISH_TAB",
	tab,
})

export const publishTitle = (title) =>({
	type : "PUBLISH_TITLE",
	title
})

export const publishContent = (content) =>({
	type : "PUBLISH_CONTENT",
	content
})
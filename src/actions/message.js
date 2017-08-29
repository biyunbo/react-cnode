import instance from 'utils/instance';

//未读消息个数
export const messageNum = (num) => ({
	type : 'MESSAGE_NUM',
	num
})
//标记全部已读
export const postMessage = (accesstoken) => async (dispatch,getState) =>{
	try {
		let data = {"accesstoken":accesstoken}
		let response = await instance.post(`message/mark_all`,data)
	} catch(error) {
		console.log('error: ', error)
	}
}
//获取未读消息数
export const getMessagecount = (accesstoken) => async (dispatch,getState) =>{
	try {
		let response = await instance.get(`message/count/?accesstoken=${accesstoken}`)
		await dispatch(messageNum(response.data.data))
		console.log(response.data.data)
	} catch(error) {
		console.log('error: ', error)
	}
}

//获取已读和未读消息
export const messageCenter = (data) => ({
	type : 'MESSAGE_CENTER',
	data
})

export const setTabm = (tab) => ({
	type : 'SET_TABM',
	tab
})

export const getMessage = (accesstoken) => async (dispatch,getState) =>{
	try {
		let response = await instance.get(`messages/?accesstoken=${accesstoken}`)
		await dispatch(messageCenter(response.data))
	} catch(error) {
		console.log('error: ', error)
	}
}
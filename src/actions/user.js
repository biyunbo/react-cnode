import instance from 'utils/instance';

export const userCenter = (data) => ({
	type : 'USER_CENTER',
	data
})

export const setTab = (tab) => ({
	type : 'SET_TAB',
	tab
})

export const getUser = (id) => async (dispatch, getState) =>{
	try {
		let response = await instance.get(`user/${id}`)
		await dispatch(userCenter(response.data))
	} catch(error) {
		console.log('error: ', error)
	}
}
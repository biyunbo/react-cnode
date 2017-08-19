import instance from 'utils/instance';

export const selectTab = (tab) => ({
	type: 'SELECT_TAB',
	tab
})

export const receiveTopic = (tab, topics, page, limit) =>({
	type: 'RECEIVE_TOPICS',
	tab,
	topics,
	page,
	limit
})

export const getList = (tab, page = 1, limit = 10) => async (dispatch, getState) => {
    dispatch(selectTab(tab))
    try {
        let response = await instance.get(`/topics?tab=${tab}&page=${page}&limit=${limit}`)
        await dispatch(receiveTopic(tab, response.data, page, limit))
    } catch (error) {
        console.log('error: ', error)
    }
}
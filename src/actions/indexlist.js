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

export const requestTopic = (tab) => ({
	type: 'REQUEST_TOPICS',
	tab
})

export const recordScrollT = (scrollT) =>({
	type: 'RECORD_SCROLLT',
	scrollT
})

export const getList = (tab, page = 1, limit = 10) => async (dispatch, getState) => {
    dispatch(requestTopic(tab))
    dispatch(selectTab(tab))
    dispatch(recordScrollT())
    try {
        let response = await instance.get(`/topics?tab=${tab}&page=${page}&limit=${limit}`)
        await dispatch(receiveTopic(tab, response.data, page, limit))
    } catch (error) {
        console.log('error: ', error)
    }
}
import instance from 'utils/instance';

export const requestArticle = (id) => ({
	type: 'REQUEST_ARTICLE',
	id
})

export const getArticle = (id) => async (dispatch, getState) => {
	dispatch(requestArticle(id))
    try {
        let response = await instance.get(`/topic/${id}`)
        await dispatch(receiveArticle(response.data,id))
    } catch (error) {
        console.log('error: ', error)
    }
}

export const receiveArticle = (data,id) => ({
	type: 'RECEIVE_ARTICLE',
	data,
	id
})

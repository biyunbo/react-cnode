import instance from 'utils/instance';

const indexList = (response) => ({
	type: 'INDEX_LIST',
	listMain: response.data
})

export const getList = () => async (dispatch, getState) => {
    try {
        let response = await instance.get(`/topics`)
        await dispatch(indexList(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}
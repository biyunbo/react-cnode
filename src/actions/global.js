import instance from 'utils/instance';

export const successLogin = (accesstoken, loginname, id) => ({
	type: 'SUCCESS_LOGIN',
	accesstoken,
	loginname,
	id
})

export const postAccessToken = (access_token) => async (dispatch, getState) =>{
	try {
		let response = await instance.post(`/${access_token}`)
		await response.success ? dispatch(successLogin(access_token ,response.loginname ,response.id)):dispatch(failLogin(response.error_msg))
	} catch(error) {
		console.log('error: ', error)
	}
}

export const failLogin = (error_msg) => ({
	type: 'FAIL_LOGIN',
	error_msg
})

export const loginOut = () => ({
	type: 'LOG_OUT'
})

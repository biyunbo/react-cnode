import instance from 'utils/instance';
import { saveData } from 'utils/cookie'

export const successLogin = (accesstoken, loginname, id ) => ({
	type: 'SUCCESS_LOGIN',
	accesstoken,
	loginname,
	id
})

export const postAccessToken = (access_token) => async (dispatch, getState) =>{
	try {
		let response = await instance.post(`accesstoken/?accesstoken=${access_token}`)
		await response.data.success ? dispatch(successLogin(access_token ,response.data.loginname ,response.data.id)):dispatch(failLogin(response.data.error_msg))
		saveData("access_token",access_token,10)
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

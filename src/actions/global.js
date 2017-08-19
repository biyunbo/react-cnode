import instance from 'utils/instance';

const successLogin = (accesstoken, loginname, id) => ({
	type: 'SUCCESS_LOGIN',
	accesstoken,
	loginname,
	id
})
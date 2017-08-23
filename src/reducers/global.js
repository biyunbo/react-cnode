// 初始化状态
let Initialization = {
    success : false
}

export function global(state = Initialization , action) {
	switch (action.type) {
		case 'SUCCESS_LOGIN':
			//console.log('登录成功');
			return Object.assign({},state,{
				success : true,
				loginname : action.loginname,
				id : action.id,
				accesstoken : action.accesstoken
			})
		case 'FAIL_LOGIN':
			//console.log('登录失败');
			return Object.assign({},state,{
				success : false,
				failmessage : action.error_msg
			})
		case 'LOG_OUT':
			return Object.assign({},state,{
				success : false
			})
		default:
			return state
	}
}
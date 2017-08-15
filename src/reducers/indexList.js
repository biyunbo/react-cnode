// 初始化状态
let initNavList = {
    listMain: []
}

export function indexList(state = initNavList, action) {
    switch (action.type) {
        case 'INDEX_LIST':
            return {
                ...state,   //三个点是展开符
                listMain: action.listMain
            }
        default:
            return {...state};
    }
}
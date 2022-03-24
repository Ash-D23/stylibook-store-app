export const userProfileReducerFn = (state, action) =>{
    switch(action.type){
        case 'updateUserName':
            return { ...state, userName: action.payload }
        case 'updateFirstName':
            return { ...state, firstName: action.payload }
        case 'updateLastName':
            return { ...state, lastName: action.payload }
        case 'updatePhone':
            return { ...state, phone: action.payload }
        case 'updateGender':
            return { ...state, gender: action.payload }
        case 'resetProfile':
            return { ...action.payload }
        default:
            return state
    }
}
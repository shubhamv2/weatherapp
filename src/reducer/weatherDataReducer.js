const reducer = (state, action) =>{
    switch(action.type){
        case "UPDATE_SCREEN":
            return {...state, searchText: action.value}

        case 'UPDATE_WEATHER':
            return {...state, weatherData:action.value}
        default:
            return state
    }
}

export default reducer
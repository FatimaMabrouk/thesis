import {SET_WEBSITES, SELECT_WEBSITE, ADD_WEBSITE} from '../actions/constants';

const websiteReducer = (state = [], action) => {
    switch (action.type) {
        case SET_WEBSITES:
            console.log(action.payload)
            return action.payload;
        case SELECT_WEBSITE: 
            return state;
        case ADD_WEBSITE:
            if(state.websites.contains(action.payload)){
                alert('sorry choose another name');
                return state;
            }
            return {
                ...state,
                websites: [...state.websites, action.payload]
            }
      default:
        return state
    }
}

export default websiteReducer;

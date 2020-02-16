import * as actionTypes from './actions/actions';
import {updatedObject} from './utility'

const initialState = {
    userName : '',
    password : ''
}

const reducer = (state= initialState,action)=>
{
    switch(action.type)
    {
        case actionTypes.USERNAME :
            return updatedObject(state,{userName : action.value})
            
        case actionTypes.PASSWORD :
                return updatedObject(state,{password: action.value})

        default :
         return state;
    }
        
}

export default reducer;
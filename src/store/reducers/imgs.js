import {GETALL, SETLOADING,GETBYTAG, SETNOIMAGES, SETIMAGES} from '../actions/type'

const initialState = {
    imgs: [],
    loading: true,
    noImages: false
}
// eslint-disable-next-line
export default function (state=initialState, action){
    switch (action.type){
        case GETALL:
            return{
                ...state,
                imgs: action.value

            }
        case GETBYTAG:
            return{
                ...state,
                imgs: action.value
            }
        case SETLOADING:
            return{
                ...state,
                loading: false
            }
        case SETNOIMAGES:
            return{
                ...state,
                noImages: true
            }
        case SETIMAGES:
            return{
                ...state,
                noImages: false
            }
        
        
        default:
            return state
    }
    
}
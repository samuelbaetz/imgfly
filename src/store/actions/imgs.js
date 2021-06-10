import UserService from '../../services/user.service'
import {GETALL,SETLOADING,GETBYTAG,SETNOIMAGES, SETIMAGES} from '../actions/type'

export const getAll = (res) => {
    return{
        type: GETALL,
        value: res
    }
}
export const setLoading = () => {
    return{
        type:SETLOADING
    }
}

export const getByTag = (res) => {
    return{
        type: GETBYTAG,
        value: res
    }
}
export const setNoImages = () => {
    return{
        type:SETNOIMAGES
    }
}
export const setImages = () => {
    return{
        type:SETIMAGES
    }
}


export const getAllImgs = () => {
    return dispatch => {
        UserService.getAll()
        .then(res => {
            dispatch(getAll(res.data.imgs))
            dispatch(setLoading())
            
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getTags = (tag) => (dispatch) => {
    return UserService.getByTag(tag)
    .then(res => {
        if(res.data.imgs.length < 1){
            dispatch(setNoImages())
        }else{
            dispatch(setImages())
        }
        dispatch(getByTag(res.data.imgs))
        dispatch(setLoading())
        
        
    })
    .catch(err => {
        console.log(err)
    })
}


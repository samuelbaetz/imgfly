import axios from 'axios'
import authHeader from './authheader'
const API_URL = 'https://imgl.azurewebsites.net/'

class UserService {
    getAll(){
        return axios.get(API_URL + "all")
    }
    getCollections(){
        return axios.get(API_URL + "collections")
    }
    getByTag(tag){
        return axios.get(API_URL + "tag/" + tag)
    }
    upld(formdata){
        return axios.post(API_URL + "upld",formdata,{headers: authHeader()} )
    }
    newCollection(title){
        return axios.post(API_URL + "newcollection",{"title": title})
    }
    register(formdata){
        return axios.post(API_URL + "register", formdata)
    }
    
}


export default new UserService()
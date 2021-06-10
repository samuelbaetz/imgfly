import axios from 'axios'
import { useHistory } from "react-router-dom";

const API_URL = 'https://imgl.azurewebsites.net/'

class AuthService {
    login(username,password){
        return axios
        .post(API_URL + "login", {
            "username":username, 
            "password":password
        })
        .then((res) => {
            if (res.data.access_token) {
                localStorage.setItem("user", JSON.stringify(res.data))
            }
            return res.data
        })
        .catch((error) => {
            let history = useHistory()
            history.push("/hello")
        })
    
    }

    logout() {
        localStorage.removeItem("user")
    }

    register(username,password,email,avatarurl){
        return axios.post(API_URL + "register", {
            username,
            password,
            email,
            avatarurl
        })
    }
}

export default new AuthService()
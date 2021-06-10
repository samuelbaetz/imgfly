export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'))

    if (user.access_token){
        return  {Authorization: `Bearer ${user.access_token}`, 'Content-Type': 'multipart/form-data'}
    } else {
        return {}
    }
}
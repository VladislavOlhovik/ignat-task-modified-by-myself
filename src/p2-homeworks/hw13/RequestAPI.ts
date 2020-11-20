import Axios from "axios";

let instance = Axios.create({
    baseURL:'https://neko-cafe-back.herokuapp.com/',
})

export const requestAPI = {
    get(value:boolean){
        return instance.post('auth/test',{success: value})
    }
}



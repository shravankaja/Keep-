
import axios from 'axios'

export const signUp = function (obj) {
    return new Promise((reslove, reject) => {
        axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', obj).then(
            resp => { console.log(resp.request.status);  reslove(resp.request.status)})
    });
}

export const signIn = function(obj1) {
    return new Promise((reslove, reject) => {
        axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', obj1).then(
            resp => { console.log(resp.request.status);  reslove(resp.request.status)})
    });

}



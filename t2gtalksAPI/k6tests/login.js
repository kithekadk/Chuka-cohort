import http from 'k6/http';
import {check} from 'k6'

export const options ={
    vus: 10,
    duration: '10s'
}

export default function(){
    const url = 'http://localhost:4116/auth/login';
    const body = JSON.stringify({
        email: 'janedoe@yopmail.com',
        password: '12345678'
    })

    const params = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const response = http.post(url, body, params)
    // console.log(response);

    check(response, {
        'is status 201': (res)=>res.status === 201,
        'is successfully logged in': (res)=>res.body.includes('Logged in')
    })
}
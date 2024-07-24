import http from 'k6/http';
import {sleep} from 'k6'

export const options = {
    stages:[
        {duration: '10s', target: 50},
        {duration: '30s', target: 300},
        {duration: '20s', target: 5}
    ],
    thresholds:{
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90) < 800', 'p(95) < 2000','p(99) < 3000']
    }
}

export default ()=>{
    http.get('http://localhost:4116/post/all')
    sleep(1)
}
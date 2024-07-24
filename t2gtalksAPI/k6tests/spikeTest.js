import http from 'k6/http';
import {sleep} from 'k6'

export const options = {
    stages:[
        {duration: '10s', target: 200},
        {duration: '1h', target: 200},
        {duration: '10s', target: 0}
    ],
    thresholds:{
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90) < 800', 'p(95) < 1500','p(99) < 2000']
    }
}

export default ()=>{
    http.get('http://localhost:4116/post/all')
    sleep(1)
}
import axios from "axios";

const Apilib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-dmxqrsm/endpoint/data/v1',
    headers:{
        'api-key' : 'YIRAN32Pw37lwBjyvRzexqMqGIkXqo3IQ7w8jjalstg8sRBZHWdBHb6AJRDap7Ry'
    },
})

export default Apilib;
import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-kqurzbv/endpoint/data/v1',
    headers: {
        'api-key': '6UsSlT5sk2d62Lwm4eDXNxdoIKfEom1elttAoQVHMd8B6kA2mFSXASgpGy4cyoMu'
    },
})

export default ApiLib;
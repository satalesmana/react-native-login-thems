import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-dprrtqn/endpoint/data/v1',
    headers: {
        'api-key': '5z1Tu4jJATwPsGMlv0nUShHVrxYUGJKNffq5ACNwMEbDJwp4mxQ557AyF2XIx8Fi'
    },
})

export default ApiLib;
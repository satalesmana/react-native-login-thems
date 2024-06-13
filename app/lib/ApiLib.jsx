import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-dysfecg/endpoint/data/v1',
    headers: {
        'api-key': 'vp8RfzRULRfdoKVE9SLRixv7kfN5V1ALPNz2msCOH4QXgiLRVyMjlhtytZ1InaBZ'
    },
})

export default ApiLib;
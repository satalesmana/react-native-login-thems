import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-jngkiof/endpoint/data/v1',
    headers: {
        'api-key': '24XEQMomyE8eyJcia1eccyuwuNxQThTy8qFiz3nwkYccUhMKb7BUF1RaTSHFdcms'
    },
})

export default ApiLib;
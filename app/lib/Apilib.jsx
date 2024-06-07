import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-oncnwgi/endpoint/data/v1',
    headers: {
        'api-key': 'oSiw4KWxhUMQe12d2TUK3uPHHX7ke75LgkwDy4AMDgTFkLYbMwlzU4KHtv1xs6Pf'
    },
})

export default ApiLib;

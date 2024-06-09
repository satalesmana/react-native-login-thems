import axios from "axios";

const ApiLib = axios.create({
    baseURL:'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-bwgaxvz/endpoint/data/v1',
    headers:{
        'api-key':'ulFuFGHAscN4pybQQr9VMLF658XV6udcZQi3jzxPyDcEC0YhAMoSot3ra3Bfuyn7'
    },
})
export default ApiLib;
import axios from "axios";

const ApiLib = axios.create({
    baseURL:'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-xxfyxuq/endpoint/data/v1',
    headers:{
        'api-key':'f2LpDitiRiJhLwzIe7ZqU0p9XITESQXJS5u17Zj27G2IQ4VXXAO78T0BMygDfW89'
    },
})
export default ApiLib;
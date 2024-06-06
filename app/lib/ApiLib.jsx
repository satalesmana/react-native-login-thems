import axios from "axios";

const ApiLib = axios.create({
    baseURL:'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-xxfyxuq/endpoint/data/v1',
    headers:{
        'api-key':'V0a0akjNeEW9Ri3MZVNSB4a3EwMIqRkcZACgLbAsTsKennEjB4plxDDkMBBKlgfG'
    },
})
export default ApiLib;
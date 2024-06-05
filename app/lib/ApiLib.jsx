import axios from "axios";

const ApiLib = axios.create({
    baseURL:'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-xxfyxuq/endpoint/data/v1',
    headers:{
        'api-key':'TdIRjwaNbSkFfGnEMd62Y4Cc8Qyuy7w60R1717SOjQr4uKrPpKsVR2GDBuhaKJYZ'
    },
})
export default ApiLib;
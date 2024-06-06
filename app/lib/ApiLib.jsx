import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-xxfyxuq/endpoint/data/v1',
    headers: {
        'api-key': 'P3O14QK9oFcsuL65om8N5qKHswslASfJ5inYuz7n2rseiayMnUTC0BxCblteAmRK'
    },
})

export default ApiLib;
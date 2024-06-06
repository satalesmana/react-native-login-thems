import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-mciuknc/endpoint/data/v1',
    headers: {
        'api-key': 'bmuO3rzF2j1HPo6RlcYoUm0Iw6GE8e82zSD3AjWKbzDDlJt6hjpJ3ULkv7NxU7p2'
    },
})

export default ApiLib;
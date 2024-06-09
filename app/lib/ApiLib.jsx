import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-istmhlj/endpoint/data/v1',
    headers: {
        'api-key': 'IEMDuQETj6KpshksjJGGLagmnnBzYZKo2aBghRnBzYWwHEQnaRnZIYzo9aZOUIom'
    },
})

export default ApiLib;
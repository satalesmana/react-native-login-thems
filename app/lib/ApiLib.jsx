import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-dysfecg/endpoint/data/v1',
    headers: {
        'api-key': 'DZhBZSIHqW70I92vMg3xxHBkOzeWo7CKo8jgbdohUY0Dbsz846Mo6s5wW70lmaz7'
    },
})

export default ApiLib;
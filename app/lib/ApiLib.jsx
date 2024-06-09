import axios from "axios";

const ApiLib = axios.create({
  baseURL:
    "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-oczsmaq/endpoint/data/v1",
  headers: {
    "api-key":
      "sy6WC8dtV1LRFnSzI2cU7V41EObVkuLwoEGGqsr5iYkwFEnFLJZZpsbuw4Q4KiVb",
  },
});

export default ApiLib;

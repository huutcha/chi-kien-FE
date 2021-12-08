const apiHost = "http://127.0.0.1:8000/api";
const axios = require('axios').default;

export const getApi = (url, params) => {
    let uri = "";
    if (params) {
        uri = Object.keys(params).map((key) => {
            return key + "=" + params[key]
        }).join('&')
    }
    let fullUrl = apiHost + "/" + url + "?" + uri
    return axios.get(fullUrl)
}

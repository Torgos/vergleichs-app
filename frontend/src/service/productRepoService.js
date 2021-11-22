const axios = require('axios');


export function getAllProducts() {
    return axios.get("api/product")
        .then(result => result.data)
        .catch(error => console.error(error))
}


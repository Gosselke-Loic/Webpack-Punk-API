import axios from "axios";

//route
const params = {
    beers: "beers"
}

// Base url API
const URL_BASE = "https://api.punkapi.com/v2/";

//Instance axios and config
const instance = axios.create({
    baseURL: URL_BASE,
    responseType: 'json',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export { instance, params };
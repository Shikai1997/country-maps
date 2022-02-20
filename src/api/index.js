import axios from 'axios'

// 封裝axios 目前沒設攔截器
const Request = axios.create({
    baseURL: 'https://restcountries.com/v2'
})
export function fetch(url, params = {}) {
    return new Promise((resolve,reject) => {
        Request
        .get(url, {
            params: params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            console.log(err)
            reject(err);
        });
    });
}

export const getAllCountries = params => Request.get('/all',{params})

export const getCountry = (req,params)=>{
    return fetch(`/name/${req}`,params)
}



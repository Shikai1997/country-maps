import axios from 'axios'

// 封裝axios 目前沒設攔截器
const Request = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2'
});


export const getAllCountries = data => Request.get('/all',data)
import axios from "axios";


export const api = axios.create({
    baseURL: 'https://fakerestapi.azurewebsites.net/api/v1/',
    timeout: 4000,
    headers: {'Content-Type': 'application/json'}
  });
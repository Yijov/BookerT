
import {api} from "../config/axios"
import { Author } from "../models/Author";


export const GET_AUTHORS= async ()=>{
    const response= await api.get<Author[]>("/Authors")
    const books= await response.data;
    return books
}
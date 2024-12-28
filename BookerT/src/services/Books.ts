import { Book } from "../models/Book"
import {api} from "../config/axios"


export const GET_BOOKS= async ()=>{
    const response= await api.get<Book[]>("/books")
    const books= await response.data;
    return books
}
export const GET_BOOK= async (id:number)=>{
    const response= await api.get<Book>("/books/"+id)
    const book= await response.data;
    return book
}

export interface PostBookRequest {
    "id": string,
    "title": string,
    "description": string,
    "pageCount": number,
    "excerpt": string,
    "publishDate": string
  }

export const POST_BOOKS= async (request:  PostBookRequest)=>{
    const response= await api.post<Book[]>("/books", {request})
    const books= await response.data;
    return books
}

export interface PutBookRequest {
    "id": 0,
    "title": "string",
    "description": "string",
    "pageCount": 0,
    "excerpt": "string",
    "publishDate": "2024-12-28T05:16:29.734Z"
  }

export const PUT_BOOK= async (request: PutBookRequest)=>{
    const response= await api.put<Book>("/books/"+request.id, {request})
    const books= await response.data;
    return books
}
export const DELETE_BOOK= async (request: PutBookRequest)=>{
    const response=await api.delete("/books/"+request.id)
    return response
}
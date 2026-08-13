
import axios from "axios";

export const getAllProducts = ()=>{

  return  axios.get("https://fakestoreapi.com/products")
}

export const getSepcificProduct = (id)=>{
 return axios.get(`https://fakestoreapi.com/products/${id}`)
}
import {API} from '../config'
export const createCategory=(id,token,category)=>{
    return fetch(`${API}/category/create/${id}`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}
export const createProduct=(id,token,product)=>{
    return fetch(`${API}/product/create/${id}`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err);
    })
}
export const getCategories=()=>{
    return fetch(`${API}/categories`,{
        method:"GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(error=>{
        console.log(error);
    })
}
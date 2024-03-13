import commonApi from "./commonApi";
import { BASE_URL } from "./base_urls";

export const uploadVideo = async(data)=>{
    return await commonApi("POST",`${BASE_URL}/allVideos`,data)
}

export const getVideos = async ()=>{
    return await commonApi("GET",`${BASE_URL}/allVideos`,"")
}

export const deleteVideo = async (id)=>{
    return await commonApi("DELETE",`${BASE_URL}/allVideos/${id}`,{})
}

export const addcategory = async(data)=>{
    return await commonApi("POST",`${BASE_URL}/categories`,data)
}

export const getCategory= async()=>{
    return await commonApi("GET",`${BASE_URL}/categories`,"")
}

export const deleteCategory = async (id)=>{
    return await commonApi("DELETE",`${BASE_URL}/categories/${id}`,{})
}

export const addhistory = async(data)=>{
    return await commonApi("POST",`${BASE_URL}/history`,data)
}

export const allHistory= async()=>{
    return await commonApi("GET",`${BASE_URL}/history`,"")
}

export const deleteHistory = async (id)=>{
    return await commonApi("DELETE",`${BASE_URL}/history/${id}`,{})
}

export const getSpecificVideos = async (id)=>{
    return await commonApi("GET",`${BASE_URL}/allVideos/${id}`,"")
}

export const updateCategory= async(data,id)=>{
    return await commonApi("PUT",`${BASE_URL}/categories/${id}`,data)
}



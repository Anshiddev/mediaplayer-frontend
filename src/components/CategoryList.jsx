import React, { useEffect, useState } from 'react'
import { deleteCategory, getCategory, getSpecificVideos,updateCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'

function CategoryList({status}) {

    const [cat,setCat] = useState([])
    const[delStatus,setDelStatus] = useState('')

    useEffect(()=>{
        getData()
    },[status,delStatus])

    const getData = async ()=>{
        const res = await getCategory()
        console.log(res)
        setCat(res.data)
    }

    const handleDelete = async(id)=>{
        const res = await deleteCategory(id)
        console.log(res);
        if (res.status>=200 && res.status<300) {
            toast.success('category deleted successfully')
            setDelStatus(res.data)
        }else{
            toast.error('Category Deletion Failed!!!')
        }
    }


    const handleDrop=async(e,id)=>{
        // console.log("category id:",id);
        const vid = e.dataTransfer.getData("videoId")
        // console.log("dropped video id :"+vid)
        const category = cat.find(item=>item.id == id)
        // console.log(category);
        const video = await getSpecificVideos(vid)
        console.log(video.data);
        category.videos.push(video.data)
        console.log(category);
        const res = await updateCategory(category,id)
        if(res.status >= 200 && res.status<300){
            toast.success(`${video.data.caption} added to ${category.name}`)
            getData()
        }else {
            toast.error('Video Adding to Category failed !!!')
        }
    }

    const handleDragOver =(e)=>{
        e.preventDefault()
    }

  return (
    <>
    <div className='mt-3 border shadow p-2' >
        {
            cat?cat.map(item=>(
                <div className='bg-primary rounded shadow my-1 p-3' onDragOver={e=>{handleDragOver(e)}} onDrop={e=>{handleDrop(e,item.id)}}>
                    <div>
                        <span>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i class="fa-solid fa-trash bg-primary" onClick={()=>{handleDelete(item.id)}} style={{color:'#ff0000'}} ></i>
                    </div>
                    <div className='mt-3'>
                        {
                            item?.videos?.map(v=>(
                                <VideoCard video={v} cat={true}/>
                            ))
                        }
                    </div>

                </div>
            )):
            <h1>No Categories!!!</h1>
        }
    </div>
    </>
  )
}

export default CategoryList
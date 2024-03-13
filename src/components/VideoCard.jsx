import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { deleteVideo,addhistory } from "../services/allApis";
import {toast} from 'react-toastify'

function VideoCard({video,setDel,cat}) {
  const [show, setShow] = useState(false);
  const[his,setHis] = useState({
    caption:video.caption,url:video.url,datetime:''
  })
  
  const handleDelete = async (id) =>{
    const res = await deleteVideo(id)
    if(res.status >= 200 && res.status <300){
      setDel('Success')
      toast.success('Video deleted')
    } else {
      toast.error('Video Deletion Failed')
    }
  }

  const handleClose = () => {
    console.log(his);
    addhistory(his)
    setShow(false)
  }

  const handleShow = () => {
    setHis({...his,datetime:new Date()})
    setShow(true)
  }

  const handleDrag=(e,id)=>{
    console.log('Video ID:'+id)
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
      <Card style={cat?{ width: "10rem" }:{ width: "18rem" }} className="ms-2 mt-2" draggable onDragStart={(e)=>{handleDrag(e,video?.id)}} >
        <Card.Img variant="top" onClick={handleShow} src={video.image} style={{height:'250px'}}/>
        <Card.Body>
          <Card.Title >{video.caption}</Card.Title>
          {
            !cat &&
            <Button className="btn float-end" onClick={()=>{handleDelete(video.id)}}>
            <i class="fa-solid fa-trash"></i>
            </Button>
          }      
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Qs2LXGLR9u8?si=8KOxhWE3G_h_1pnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="560" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </Modal.Body>

      </Modal>
    </>
  );
}

export default VideoCard;

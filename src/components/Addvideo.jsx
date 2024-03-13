import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from "../services/allApis";
import {toast} from 'react-toastify'

function Addvideo({setRes}) {
  const [show, setShow] = useState(false);
  const[video,setVideo] = useState({
    caption:'',url:'',image:''
  })

  const getData=(e)=>{
    const {name,value} = e.target
    //console.log(name,value);
    if(name=='caption'){
      setVideo({...video,caption:value})
    }
    if(name == "url"){
      const url = value
      const furl = url.split("e/")
      const videourl= `https://www.youtube.com/embed/${furl[1]}&autoplay=1`
      // const furl = url.split("v=")
      // console.log(furl)
      // const videourl = `https://www.youtube.com/embed/${furl[1]}?si=8KOxhWE3G_h_1pnQ&autoplay=1`
      console.log(videourl)
      setVideo({...video,url:videourl})
    }
    if(name == "image"){
      setVideo({...video,image:value})
    }
  }
  //console.log(video);

  const handleAddVideo = async ()=>{
    const{caption,image,url}=video
    if(!caption || !image || !url){
      toast.warning("Enter Valid Data!!")
    }
    else{
      console.log(video)
      
      const res = await uploadVideo(video)
      console.log(res)
      if(res.status>=200 && res.status<300){
        setRes('succcessfull...')
        toast.success("video uploaded successfully!!")
        handleClose()
      }else {
        toast.error("video Uploaded Failed!!")
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <span className="btn" onClick={handleShow}>
      <i class="fa-solid fa-circle-plus fa-2x"></i>
      </span>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">

            <div className="mt-3">
              <Form.Control size="sm" onChange={(e)=>getData(e)} name='caption' type="text" placeholder="Caption" />
            </div>
            <div className="mt-3">
              <Form.Control size="sm" onChange={(e)=>getData(e)} name='image' type="text" placeholder="Image URL" />
            </div>
            <div className="mt-3">
              <Form.Control size="sm" onChange={(e)=>getData(e)} name='url' type="text" placeholder="Video URL" />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddVideo}>
            Upload 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addvideo;

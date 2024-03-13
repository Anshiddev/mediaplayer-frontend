import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
import { addcategory } from "../services/allApis";
import CategoryList from "./CategoryList";


function Categories() {
  const [show, setShow] = useState(false);
  const [category,setCategory] = useState("")
  const [addStatus,setAddStatus] = useState({})

  const getData = (val) => {
    if(val){
      setCategory(val)
    }
  }

  const handleSubmit =async()=>{
    if(!category){
      toast.info('Enter Valid Data !!!')
    } else {
      console.log(category);
      const data = {name:category,videos:[]}
      const res = await addcategory(data)
      if(res.status>= 200 && res.status<300){
        toast.success("category Added!")
        setCategory("")
        handleClose()
        setAddStatus(res.data)
      }else {
        toast.error("category Adding Failed!!!")
      }
    }
  }

  const handleClose = () => {
    setShow(false)
    setCategory("")
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button variant="info" onClick={handleShow}>
          Add Category
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ctegory</Form.Label>
            <Form.Control onChange={(e)=>{getData(e.target.value)}} type="text" rows={2} placeholder="Enter category" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <CategoryList status={addStatus}/>
    </>
  );
}

export default Categories;

import React,{ useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Addvideo from '../components/Addvideo'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


function Dashboard() {
  const [resStatus,setResstaus] = useState("")
  return (
    <>
    <h2>Dashboard</h2>
    <Link to={'/his'}>Watch History</Link>
    <Row className='mt-3 p-5'>
      <Col sm='1' md='1'>
        <Addvideo setRes={setResstaus}/>
      </Col>
      <Col sm='4' md='8'>
        <Videos resStatus={resStatus}/>
      </Col>
      <Col sm='2' md='3'>
        <Categories/>
      </Col>
    </Row>

    
<ToastContainer />


    </>
  )
}

export default Dashboard
import React, { useEffect, useState } from 'react'
import { allHistory,deleteHistory } from '../services/allApis'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function History({status}) {

  const [history,setHistory] = useState([])
  const[delStatus,setDelStatus] = useState('')

  useEffect(()=>{
    getData()
  },[status,delStatus])

  const getData = async ()=>{
    const res = await allHistory()
    console.log(res.data);
    setHistory(res.data)
  }

  const handleDelete = async(id)=>{
    const res = await deleteHistory(id)
    console.log(res);
    if (res.status>=200 && res.status<300) {
        toast.success('History deleted successfully')
        setDelStatus(res.data)
    }else{
        toast.error('History Deletion Failed!!!')
    }
}

const handleDrop=(e)=>{
  console.log(e.target);
}


  return (
    <>
    <div className='p-5'>
      <Link to={'/dash'} className='btn btn-info float-end mb-5'>Dashboard</Link>
      <h4>Watch History</h4>

      <table className='table table-bordered'>
        <tr>
          <th>Caption</th>
          <th>Video Url</th>
          <th>Date and time</th>
        </tr>
        {
          history.length>0?
          history.map(item =>(
            <tr>
              <td>{item.caption}</td>
              <td>{item.url}</td>
              <td>{item.datetime}</td>
              <td>
              <i className='fa-solid fa-trash bg-primary' style={{backgroundColor: 'transparent'}} onClick={()=>{handleDelete(item.id)}}></i>
              </td>
            </tr>
          )):
          <p className='text-danger'>No History Found</p>
        }
      </table>
    </div>
    </>
  )
}

export default History
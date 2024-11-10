import React from 'react'
import { Link } from 'react-router-dom'
import "./LandPage.css"
import { SiTask } from 'react-icons/si'
const LandPage = () => {
  return (
    <div >
           
        <h1  id='body'  className=' text-danger'  > <SiTask className='fs-1 text-secondary ms-5'/> Task Manager</h1>

    <div id='body' className='row p-5 text-muted d-flex '>
        <div className="col-6 p-5">
        <h1 className=' my-3 text-info'>Task Manager</h1>
        <p className='text-light p-3 my-2 d-flex'>Task manager here to help you Upload the any details you want .  there is  Get start button  justcscroll down  click there you will see it...   </p>

        <div className="col p-5 me-5 shadow   ">
            <img className=' hover-shadow rounded-4' width={'350px'} height={'250px'}  src="https://joshtronic.com/wp-content/uploads/2024/01/ubuntu-install-node-21.png" alt="" />
        </div>
        <div className=" my-3">
            <Link to={'/home'}>
            <button className='btn btn-warning ms-5'style={{textAlign: 'justify'}}>Get Start</button>
            </Link>
        </div>
        </div>
       
    </div>
</div>
  )
}

export default LandPage
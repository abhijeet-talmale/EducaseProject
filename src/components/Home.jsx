import React from 'react'
import '../assets/css/Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="container-fluid mt-5 d-flex  justify-content-center align-items-center">
      <div className="contianer-fluid px-3 pt-5 p m-3  d-flex justify-content-center flex-column align-items-center border rounded  shadow " style={{maxWidth:"fit-content",height:"80%"}}>
        <h3 className='w-100 text-start'>Welcome to PopX</h3>
        <p className='w-100 text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Link to="/createAccount">
        <button className="btn w-100 m-2" style={{backgroundColor:"#6C25FF",color:"#FFFFFF"}}>Create Account</button>
        </Link>
        <Link to='/sign'>
        <button className="btn custom-outline w-100 m-2">
          Already Registered? Login
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Home

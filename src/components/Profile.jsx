import React from 'react'
import profileImg from "../assets/image/profilew.png";

const Profile = () => {
  return (
    <div className='container border rounded shadow mt-3 mb-3' style={{height:'500px',width:'50%',minWidth:"250px"}}>

        <h1>Account Setting</h1>
        <hr className='shadow'/>
        <div className='container row' style={{backgroundColor:"#F7F8F9"}}>
            <div className='col-md-4 col-12'>
                <img src={profileImg} alt="image not found" className="rounded-circle object-fit-cover border border-dark shadow" width={100} height={100}/>
            </div>
            <div className='col-md-8 col-12'>
                <p>Marry Doe</p>
                <p>Marrry@gamil.com</p>
            </div>
        </div>
        <div className='container'>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quos mollitia, exercitationem tenetur earum molestias omnis dolorum neque!</p>
        </div>
        <hr />
    </div>
  )
}

export default Profile
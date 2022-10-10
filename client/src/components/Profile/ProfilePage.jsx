import {useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux'
import './Profile.scss'
import ProfileModel from './ProfileModel';
import EditDetails from './EditDetails';
const ProfilePage = () => {
  const {user}=useSelector((s)=>s.user);
  const [detailModel,setDetailModel]=useState(false);
  // console.log(user);
  return (
      <div id="profile">
        <EditDetails open={detailModel} setOpen={setDetailModel}/>
      <div id="pTop">
        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80" alt="" />
        <div id="orangeShade">
          <h1>Have an auspicious day!</h1>
        </div>
      </div>
      <div id="picContainer">
     <div id="profilePic">
      <img src={user.avatar.url} alt="" />
      <button id="changePicBtn">
      <i className="ri-image-edit-fill"></i>
      </button>
     </div>
      </div>
      <div id="pBottom">
        <div id="profileDetails">
          <div id="pHeading">
          <h1>PROFILE DETAILS</h1>
          <h4>change password <span></span></h4>
          </div>
          <div id="pDetails">
            <div className="pElm">
             <h4>Username</h4> <p>{user.username}</p>
            </div>
            <div className="pElm">
             <h4>Name</h4> <p>{user.name}</p>
            </div>
            <div className="pElm">
             <h4>Email</h4> <p>{user.email}</p>
            </div>
            {/* <div className="pElm">
             <h4>Contact No.</h4> <p>+91 8358807540</p>
            </div>
            <div className="pElm">
             <h4>Shipping Info</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti enim cum temporibus eius obcaecati accusamus</p>
            </div> */}
            <button onClick={()=>{setDetailModel(true)}}>Edit <i className="ri-edit-line"></i></button>
            
          </div>

        </div>

      </div>
      </div>
  
  )
}

export default ProfilePage
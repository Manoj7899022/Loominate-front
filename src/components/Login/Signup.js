import { ArrowLeftOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Modal from 'antd/es/modal/Modal';
import OtpInput from "react-otp-input";
import { EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectMailId } from "../features/mailSlice";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [next, setNext] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const useremail = useSelector(selectMailId);
  console.log(useremail)

  const emojis = [
    "https://gmail.loominate.app/static/media/avatar2.9555ff10.png",
    "https://gmail.loominate.app/static/media/avatar1.c1ae5e66.png",
    "https://gmail.loominate.app/static/media/avatar3.9d063941.png",
    "https://gmail.loominate.app/static/media/avatar4.c2d5bd71.png",
    "https://gmail.loominate.app/static/media/avatar5.95134f95.png",
    "https://gmail.loominate.app/static/media/avatar6.ecbd59eb.png",
    "https://gmail.loominate.app/static/media/avatar7.71317072.png",
    "https://gmail.loominate.app/static/media/avatar8.9199c4e1.png",
    "https://gmail.loominate.app/static/media/avatar9.740e86ee.png",
    "https://gmail.loominate.app/static/media/avatar10.fbb0add0.png",
    "https://gmail.loominate.app/static/media/avatar10.fbb0add0.png",
    "https://gmail.loominate.app/static/media/avatar12.1dcaabee.png",
    "https://gmail.loominate.app/static/media/avatar13.86350798.png",
    "https://gmail.loominate.app/static/media/avatar14.b79ef3ff.png",
  ]


  const [isModalOpen1, setIsModalOpen1] = useState(false);

    const showModal1 = () => {
        setIsModalOpen1(true);
      };  
      const handleOk1 = () => {
        setIsModalOpen1(false);
      };  
      const handleCancel1 = () => {
        setIsModalOpen1(false);
      };


      const [backendOtp, setBackendOtp] = useState("")
      

    const handleOTP = async()=>{
      if(useremail){
            if( useremail.otp === otp){
              alert("Otp varification is done...")
              setNext(true)
            }else{
              alert("Please enter valid OTP...")
            }
          }
    }

    const[username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [logoLink, setLogoLink] = useState("");

    const handleCreateAccount = async() =>{
      console.log(username)
      console.log(password)
      console.log(logoLink)
      
      const dad = await axios.post("http://localhost:8000/auth/Register",{email:username, password:password, logo:logoLink})
                  .then(res=>{
                    alert("Account Created successfully....")
                    navigate('/')
                  })
                  .catch(err=> console.log("Someing wrong..."))
              }

  return (
    <div>
      {!next ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="bg-backgroundbody  w-screen h-screen"
        >
          <div>
            <img
              className="h-64 ml-52 "
              src="https://gmail.loominate.app/static/media/mons-with-pot.58ac9558.svg"
              alt="logo"
            />
          </div>
          <div className=" ml-80 mr-10 p-10" style={{ width: "50rem" }}>
            <h1 className="font-bold text-2xl mb-3">Enter Verification Code</h1>
            <p className="text-lg mb-3">
              Please type in the 4-digit code sent to your work email. If it
              does not appear in your Inbox, please check your Updates,
              Quarantined or Spam folders.
            </p>
            {/* <div > */}
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span> </span>}
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    borderBottom: "1px solid blue",
                    margin: "10px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                  }}
                />
              )}
            />
            {/* </div> */}
            <div className="flex text-center justify-start">
            <Link to='/'><ArrowLeftOutlined
                className=" h-14 w-20  rounded-md mr-3 pt-5 mt-5 flex justify-center cursor-pointer "
                style={{ border: "1px solid blue" }}
              /> </Link>
               <button
                className="border h-14 rounded-md w-3/4 mt-5 text-whi bg-backgroundRight"
                onClick={handleOTP}
              > 
                NEXT
              </button> 
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="bg-backgroundbody  w-screen h-screen"
        >
          <div>
            <img
              className="h-64 ml-52 "
              src="https://gmail.loominate.app/static/media/terms-monster.8eee51cb.png"
              alt="logo"
            />
          </div>
          <div className=" ml-60 mr-16 p-24" style={{ width: "40rem" }}>
            <h1 className="font-bold text-2xl mb-3">Setup Your Profile</h1>
            <div>
              <label className="flex justify-start text-center">Username
              <sup> <svg onClick={showModal1} className='w-5 cursor-pointer h-4 mt-1 mr-1' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                <Modal title="Tips" width={1000} open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1} footer={null} >
                        <p className="mt-2" > * Be careful not include any words that may give away your identity if you wish to remain pseudonymous.</p> <br/>
                        <p> * Usernames cannot be changed for the first 30 days.</p> <br />
                        <p> * You will be able to toggle between posting with your Username or as 'Anonymous'.</p>
                </Modal>
              </label>
              <Input className="h-12 mt-4 mb-2" onChange={(e)=> setUsername(e.target.value)} placeholder="Enter the username..." />
            </div>
            <div>
              <label>Password</label>
              <Input.Password
                placeholder="Enter the password..."
                className="h-12 my-4"
                onChange={(e)=> setPassword(e.target.value)}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />} />
            </div>
            <div>
                <p className="mb-3" >Choose an avatar</p>
                  
                    <div style={{ display:"flex", flexWrap:"wrap"}} >
                    {emojis.map((avatar)=>(
                        <div  > 
                        <img src={avatar} className="h-16 w-24 p-2 mr-4 " onClick={()=> setLogoLink(avatar)}  alt="avatar" />
                      </div>
                    ))}
                      </div>
                  
            </div>
            <div className="flex text-center justify-start" >
              <ArrowLeftOutlined 
                className=" h-14 w-20  rounded-md mr-3 pt-5 mt-5 flex justify-center cursor-pointer "
                style={{ border: "1px solid blue" }} onClick={()=> setNext(false)}
              />
              <button
                className="border h-14 rounded-md w-3/4 mt-5 text-whi bg-backgroundRight" onClick={handleCreateAccount} >
                CREATE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;

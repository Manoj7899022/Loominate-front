import React, { useState } from 'react'
import  img1 from  './images/img1.png'
import './Login.css'
import axios from 'axios'
import {  Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setMailId } from '../features/mailSlice';


const Login = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(true)
  const [signOut, setSignOut] = useState(false)
  const[otpsent, setOtpsent] = useState(false)
  const [email, setEmail] = useState("")
  const [ username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState()

  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
  };

  if(data){
    localStorage.setItem("accessToken", data)
  } 

  const handleClick1 =()=>{
    setSignIn(true);
    setSignOut(false);
  }
  const handleClick2 =()=>{
    setSignIn(false);
    setSignOut(true);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(username)
    console.log(password)

    axios .post('http://localhost:8000/auth/login',{email:username, password:password })
          .then(res =>{
            dispatch(setData(res))
            setData(res.data.accessToken)
            window.location.reload()
          } )
          .catch(err => console.log(err.message))

  }
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


  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

  const dispatch = useDispatch()

  const handleRes = async(res) =>{
    showToastMessage()
    try{
      let response = await axios.post("http://localhost:8000/auth/fetchData",{email});

      if(response.data){
        // setBackendOtp(response.data.otp)
        console.log(response.data.otp)
        dispatch(setMailId({otp:response.data.otp}))
      }
    }catch(err){
       console.log(err.message,"eeeeee")
    }
    
    // console.log(res)
    setOtpsent(true)
  }

  const SendOtp = async(e) =>{
    navigate('/Signup')
    e.preventDefault()
   console.log("OTP sent successfully")
    if(email === ""){
      alert("Enter Your Email !")
    }else if(!email.includes("@")){
      alert("Enter Valid Email !")
    }else{
      axios .post('http://localhost:8000/auth/otp',{email})
            .then(res=> handleRes(res.data))
            .catch(err=> console.log(err,"next next"))  
    }
    
  }

  return (
    <div className='login bg-gradient-to-r from-backgroundLeft to-backgroundRight h-screen w-screen items-center p-20  ' >
        <div className='loginLeft' style={{display:"flex", flexDirection:"column", alignItems:"center", color:"white"}} >
            <h1>LOOMINATE</h1>
            <p>Your Workplace Community!</p>
            <img id='img1' src={img1} alt="loominate" />
        </div>
        <div className='form'>
          <div className='btn '  >
              <button style={{color:"#03c5cc"}} onClick={handleClick1}  >SIGN IN</button>
              <button onClick={handleClick2} >SIGN UP</button>
          </div>
             
            {
              signIn ? (

                <div className='form-input' >
              <h2>soombo Coworker's Community</h2>
              <form onSubmit={(e)=>handleSubmit(e)} >
                <div className='form-input_1' >
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder='Your pseudonym' onChange={(e)=> setUsername(e.target.value)} />
                </div>
                <div className='form-input_2' >
                  <label htmlFor="">Password</label>
                  <input type="password"  placeholder='*****' onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <div>
                <a href="#" style={{margin:"10px"}}>Forgot password?</a>
                </div>
                <div>
                <button className='btn-submit text-whi '>SUBMIT</button>
                </div>
              </form>
            </div>

              ):(
                <div className='form-input' >
              <h2>Join Your Colleagues</h2>
              <form>
                <div className='form-input_1' >
                  <label htmlFor="">Email</label>
                  <input type="text"  onChange={e=> setEmail(e.target.value)}  placeholder='Enter your email...' />
                </div>
                <div style={{marginLeft:"18px"}} >
                  <div style={{display:"flex",alignItems:"center"}} >
                  <p style={{margin:"5px"}} >🧙‍♂️ Your work email is only used to confirm which space you belong to </p>
                  <sup><svg id="info-circle" style={{height:"16px"}} onClick={showModal1} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6563FF" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                  <Modal width="800px" title="🧙‍♂️ Colleagues Only" open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1} footer={null} >
                    <p style={{padding:"10px"}} >Loominate is a place for coworkers of the same organization. We group colleagues into the same private space (eg. acme.loominate.app) based on the work email used during sign-up (@acme.com).</p>
                    <p style={{padding:"10px"}} >All users go through the same verification process.</p>
                    <p style={{padding:"10px"}} >Note: Loominate is an independent, employee-driven platform and is not affiliated to your company or organization.</p>
                      </Modal>
                  </div>
                  <div style={{display:"flex",  alignItems:"center"}} >
                  <p style={{margin:"5px"}} >🔐 Your identity is protected. </p>
                  <sup><svg id="info-circle" style={{height:"16px"}} onClick={showModal2}  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6563FF" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                  <Modal width="800px" title="🔐 Safety" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2} footer={null}>
                    <p style={{padding:"10px"}} >Your work email is immediately one-way hashed and held separately from the account that you are about to create.</p>
                    <p style={{padding:"10px"}} >This means that there is no way for your organization to trace your username or activity back to your work email.</p>
                    <p style={{padding:"10px"}} >Our secure system provides the true psychological safety required for colleagues to speak openly and honestly.</p>
                      </Modal>
                  </div>
                  <div style={{display:"flex",alignItems:"center"}} >
                  <p style={{margin:"5px"}} >🦄 Just be yourself... and get rewarded for it! </p>
                  <sup><svg id="info-circle" style={{height:"16px"}} onClick={showModal3} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6563FF" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                  <Modal width="800px" title="🦄 The only place to just be yourself" open={isModalOpen3} footer={null}  onCancel={handleCancel3} >
                    <p>Loominate is an alias-based platform where staff can...</p>
                    <ul>
                      <li style={{padding:"10px"}} >Connect across hierarchies and divisions to trade battle stories and exchange thoughts on company issues.</li>
                      <li style={{padding:"10px"}} >Get honest answers about layoffs, mental health, salaries, and career progression.</li>
                      <li style={{padding:"10px"}} >Have a voice and be counted by joining staff campaigns and petitions - bring light to widespread concerns or make a brilliant staff idea go viral so that leaders sit up and listen!</li>
                      <li style={{padding:"10px"}} >Be vulnerable - speak up on your struggles and get upvoted support from colleagues who have been through it.</li>
                      <li style={{padding:"10px"}} >Most importantly, earn rewards and reputation for creating a kinder, more joyful workplace. Join to see how!</li>
                    </ul>
                      </Modal>
                  </div>
                </div>
                <div>
               <button  className='btn-submit text-whi'onClick={SendOtp} >Next</button>
                </div>
              </form>
            </div>
              )
            }
            
        </div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </div>

  )
}

export default Login
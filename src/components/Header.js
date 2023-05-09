import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectMailData } from './features/maildataSlice';
import { Avatar } from 'antd'
import { Button, Modal } from 'antd';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import './Header.css'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  const userData = useSelector(selectMailData);
  console.log(userData)
  const [logout, setLogout] = useState(false)
  const navigation = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSignout = ()=>{
    localStorage.removeItem("accessToken")
    navigation('/')
  }
 
  return (
    <div className='bg-gradient-to-r from-signInActive to-buttonRight w-screen h-20  flex justify-between items-center   ' >
        <div className='font-bold text-2xl pl-20 cursor-pointer ' >
            <h1 style={{color:"white"}} >LOOMINATE</h1>
        </div>
        <div className='mr-96 mb-10  ' style={{marginLeft:"-190px"}} >
            <input className='h-10 font-light absolute  p-4 rounded-sm  ' style={{width:"40rem"}} placeholder='Search anything in feed..' type="text"  />
            <svg className='h-6 absolute ml-96 mt-2' style={{marginLeft:"600px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><path fill="#6563FF" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
        </div>
        <div className='flex pr-16  ' >
        <svg className='w-6 mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment"><path fill="#fff" d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"></path></svg>
          <svg className='w-6 mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"  id="bell"><path fill='#fff' d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path></svg>
          <Avatar src={userData? (userData.logo) :("")} onClick={showModal}  />
          <Modal open={isModalOpen} onOk={handleOk}  width={270} footer={null} onCancel={handleCancel} >
            <div className='flex flex-col justify-start ' >
            <div className='flex  items-center mb-5 '>
                    <Avatar src={userData? (userData.logo):("")} style={{width:"60px ", height:"50px ",marginRight:"7px"}} />
                        <div className='ml-2 '>
                            <h1 className='text-lg font-bold '>{userData?(userData.email):("You")}</h1>
                            <a href=""> My Profile</a>
                        </div>
                    </div>
            <button className='flex pb-2  hover:text-rightBetween' >
                <PeopleOutlineOutlinedIcon />
                <h3  className='pl-3 font-semibold'>INVITE COLLEAGUES</h3>
              </button>
              <button className='flex mb-2 font-semibold hover:text-rightBetween ' >
                <SettingsOutlinedIcon />
                <h3 className='ml-3 font-semibold ' >SETTINGS</h3>
              </button>
              <button className='flex mb-2 font-semibold hover:text-rightBetween' >
                <HelpOutlinedIcon />
                <h3 className='ml-3 font-semibold'   >HELP & SUPPORT</h3>
              </button>
              <button className='flex mb-2 font-semibold hover:text-rightBetween  ' onClick={handleSignout } >
                <LoginOutlinedIcon />
                <h3 className='ml-3 font-semibold' >LOG OUT</h3>
              </button>
            </div>
          </Modal>
        </div>
    </div>
  )
}

export default Header
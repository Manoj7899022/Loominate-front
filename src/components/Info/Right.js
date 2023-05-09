import Modal from 'antd/es/modal/Modal';
import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { selectMailData } from '../features/maildataSlice';
import { useSelector } from 'react-redux';
import { Avatar } from 'antd';

const Right = () => {
  const userData = useSelector(selectMailData);
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

  return (
    <div  className='ml-6 mb-5 ' style={{flex: .2}} >
        <div style={{backgroundColor: 'white'}} className=' mt-5 p-5 mb-5 rounded-md mr-20' >
            <div className='flex mb-6  '>
                <h1 className='uppercase text-xl'>My Coworker Community</h1>
               <sup> <svg onClick={showModal1} className='w-5 ml-1 cursor-pointer h-4' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                <Modal title="🧙‍♂️ Colleagues Only" width={1000} open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1} footer={null} >
                        <p>Loominate is a place for coworkers of the same organization. We group colleagues into the same space (eg. acme.loominate.app) based on the work email used during sign-up (@acme.com). All users have gone through the same verification process.</p> <br/>
                        <p>The platform is independent and not affiliated to your company or organization.</p> <br />
                        <p>With our identity protection measures, this means you can speak freely without the fear of judgment or damaging your career. So be yourself and connect with new colleagues... wherever they may be!</p>
                </Modal>
            </div>
            <div className='flex items-center'>
                <img className='w-16 mr-6 rounded-full' src='https://soombo.loominate.app/static/media/avatar-company.bf9e77bc.png' />
                <h1 className='text-lg font-bold'>soombo</h1>
            </div>
        </div>
        <div style={{backgroundColor: 'white'}} className=' mr-20 mt-5 p-5 mb-5 rounded-md'>
            <h1 className='text-start uppercase text-xl mb-4'>My profile</h1>
            <div className='flex flex-col justify-start'>
                    <div className='flex  items-center  '>
                    <Avatar src={userData? (userData.logo):("")} style={{width:"80px ", height:"60px"}} />
                        <div className='ml-2 '>
                            <h1 className='text-xl font-bold'>{userData?(userData.email):("")}</h1>
                            <p className='font-light text-sm '><span style={{fontWeight:"500"}} >Jioned</span> {userData? (userData.updatedAt):("")}</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-light' >hello! this is me</p>
                    </div>
                    <div className='flex justify-around mt-5 ' >
                        <div className='h-20 w-24 mr-2 p-4 flex flex-col justify-center text-center rounded-md bg-gradient-to-r from-signInActive to-buttonRight ' style={{ color:"white"}} >
                            <h2 style={{color:"yellow"}} >1</h2>
                            <p className='text-sm' >Karma Points</p>
                        </div>
                        <div className='flex p-4 rounded-md h-20 ' >
                            <div className='flex flex-col text-center justify-center p-1 mr-3' >
                                <h2 className='font-bold' >1</h2>
                                <p>Posts</p>
                            </div>
                            <div className='flex flex-col text-center justify-center p-3' >
                                <h2 className='font-bold' >1</h2>
                                <p>Polls</p>
                            </div>
                            <div className='flex flex-col text-center justify-center ' >
                                <h2 className='font-bold' >1</h2>
                                <div className='flex' >
                                    <p className='pl-2' >Initiatives</p>
                                    <sup> <svg onClick={showModal2} className='w-5 cursor-pointer h-3 ' id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg></sup>
                                    <Modal title="🧙‍♂️ Initiatives" width={1000} open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2} footer={null} >
                                        <p>Launch a campaign, petition or, heck, start a movement!</p> <br/>
                                        <p>Help spotlight workplace issues or amazing ideas by voting for Initiatives that resonate and share them with your colleagues to add their support.</p> <br />
                                        <p>Fringe ideas, poor processes, widespread concerns... join voices and be heard!</p>
                                        <h1 className='font-bold' >Earn :</h1>
                                            <p>10 Karma points for each Initiative launched</p>
                                            <p>2 Karma points from each colleague that votes FOR</p>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className=' mr-20 mt-5 p-5 mb-5 rounded-md bg-gradient-to-r from-signInActive to-rightBetween'>
            <h1 style={{color: 'white'}} className='text-start text-xl mb-2'>About</h1>
            <p style={{color: 'white'}} className='text-start' >Loominate is a place to be your magical self. Ask those silly questions, seek support for your struggles, join moonshot ideas and be the changemaker!</p>
        </div>
        <div style={{backgroundColor: 'white'}} className=' mr-20 mt-5 p-5 mb-5 rounded-md'>
            <h1 className='text-start uppercase text-xl'>guidelines</h1>
        <div className='mt-2' >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-AccColor' >1.Be kind to each other</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                The one simple rule to rule them all.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='text-AccColor' >2.Be Constructive</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Your words and actions matter, and are representative of your organization’s culture. Solutions and ideas eat complaining for breakfast and help drive change.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='text-AccColor' >3.Unite</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The strength of our community comes from its diversity. Loominate weaves together the kindness and minds of colleagues from a wide range of backgrounds and beliefs. Use it to help shape your ideas and understanding. Not understanding someone’s viewpoint doesn’t mean that it’s wrong. Loominate is a place for rational discussion, debates and leveraging our differences!
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>

        </div>
        <div style={{backgroundColor: 'white'}} className=' mr-20 mt-5 p-5 mb-5 rounded-md'>
            <h1 className='text-start text-xl mb-2'>Our culture is community moderated, help flag:</h1>
            <ul className=' list-disc ml-4'>
                <li className='text-start'>Naming of individual staff members</li>
                <li className='text-start'>Discrimination, Hate Speech or Profanity</li>
                <li className='text-start'>Bullying, Harassment or Trolling</li>
                <li className='text-start'>Sensitive information</li>
                <li className='text-start'>Inappropriate content or Spam</li>
            </ul>
        </div>
    </div>

  )
}

export default Right
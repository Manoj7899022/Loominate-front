import React, { useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import FeedPost from "./feeds/FeedPost";
import FeedPolls from "./feeds/FeedPolls";

const Middle = () => {
  const [feed, setFeed] = useState(true)
  const [poll, setPoll] = useState(true)
  const [initia, setIntia] = useState(true)
  const items = [
    {
      label: <a href="#">Recent</a>,
      key: '0',
    },
    {
      label: <a href="#">Most Liked</a>,
      key: '1',
    },
    {
      label: 'Most Disliked',
      key: '3',
    },
  ];

  const handleAll =()=>{
    setFeed(true);
    setPoll(true);
    setIntia(true)
  }
  const handlePolls =()=>{
    setFeed(false);
    setPoll(true);
    setIntia(false)
  }

  const handleIntitiatives = ()=>{
    setFeed(false);
    setPoll(false);
    setIntia(true);
  }


  return (
    <div style={{ flex: 0.6 }} >
      <div
        style={{ backgroundColor: "white" }}
        className=" flex justify-between text-center ml-3 mt-5 p-3 mb-5 rounded-md w-full "
      >
        <h3 className="font-light mt-2">Post Something...</h3>
        <svg
          className="h-10 bg-plus rounded-full p-1 cursor-pointer "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="plus"
        >
          <path
            fill="#fff"
            d="M28,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"
          ></path>
        </svg>
      </div>
      <div className="flex justify-between text-center">
        <div className="flex">
          {poll ?(
              <div className=" bg-whi  rounded-md ml-3 m-1 h-8 w-14 flex justify-center text-center">
              <button style={{color:"skyblue"}} onClick={handleAll} >All</button>
            </div>
          ):(
          //   <div className=" bg-whi rounded-md ml-3 m-1 h-8 w-14 flex justify-center text-center">
          //   <button onClick={handleAll} >All</button>
          // </div>
          ""
          ) }
          
          <div className="bg-whi rounded-md m-1 h-8 w-14 flex justify-center text-center">
            <button onClick={handlePolls} >Polls</button>
          </div>
          <div className="  bg-whi rounded-md m-1 h-8 w-24 flex justify-center text-center">
            <button onClick={handleIntitiatives} >Initiatives</button>
          </div>
        </div>

        <div className="bg-whi rounded-md ml-3 m-1 h-8 w-24 flex justify-center text-center cursor-pointer " >
          <Dropdown className=""
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space  >
                <h4 className=" text-AccColor font-bold" >Recent</h4>
                <DownOutlined className="mb-2" />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      {
        poll? (
          <div
          style={{ backgroundColor: "white" }}
          className="ml-3 mt-5 p-5 mb-5 rounded-md">
          <FeedPolls />
        </div>
        ):""
      }
      {
        feed?(
          <div
        style={{ backgroundColor: "white" }}
        className="ml-3 mt-5 p-5 mb-5 rounded-md">
        <FeedPost />
      </div>
        ):""
      }
    </div>
  );
};

export default Middle;

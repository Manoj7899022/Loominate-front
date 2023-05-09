import { SendOutlined, UserOutlined } from "@ant-design/icons";
import { MoreOutlined } from "@ant-design/icons";
import { LikeOutlined } from "@ant-design/icons";
import { DislikeOutlined } from "@ant-design/icons";
import { CommentOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";
import { Input } from 'antd';
import { useSelector } from "react-redux";
import { selectMailData } from "../../features/maildataSlice";

const FeedPolls = () => {
  const userData = useSelector(selectMailData);
  const suffix = (
    <Button 
    className="text-xs pr-1 pt-2"
      style={{
        color: "#fff",
        borderRadius:"20px",
        backgroundColor:"#198754",
        borderColor: "#198754",
      }}
    >POST <SendOutlined  className="pb-3" /> </Button>
  );
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <div className="flex justify-between text-center cursor-pointer">
        <button className="bg-backgroundbody text-sm p-2 rounded-md">
          Ask Me Anything
        </button>
        <MoreOutlined />
      </div>
      <div className="flex text-center justify-start pt-4 pb-4">
        <div className="pr-2">
          <Avatar size="large" src={userData? (userData.logo):("")} icon={<UserOutlined />} />
        </div>
        <div className="font-semibold pr-3 pt-2">
          <h3>Anonymous</h3>
        </div>
        <button className="border rounded-md pl-3 pr-3 h-8 mt-1">You</button>
      </div>
      <div className="cursor-pointer">
        <h2 className="font-normal text-2xl ">yes or no</h2>
        <p className="font-light text-xl mt-2">Just Exploring</p>
      </div>
      <div>
        <button className="bg-gradient-to-r from-Pollleft to-Pollright  flex justify-between text-center text-whi w-full mt-3 mb-3 p-1 rounded-3xl " >
            <p className="pl-3" >no</p>
            <p className="pr-3" >100%</p>
        </button>
        <button className="bg-gradient-to-r from-Pollleft2 to-Pollright2 flex justify-between text-center text-whi w-full mt-3 mb-3 p-1 rounded-3xl " >
            <p className="pl-3" >yes</p>
            <p className="pr-3" >0%</p>
        </button>
        <div className="flex justify-start text-center mb-2 " >
            <button className="border text-sm p-2 rounded-lg text-voted " style={{border:"1px solid #03c5cc" }} >VOTED</button>
            <p className="ml-3 mt-1 font-bold text-VotedColl" >1 colleague has voted</p>
        </div>
        <div>
            <p className="font-bold text-VotingEnd ">Voting ends May 10,2023</p>
        </div>
        <div className="mt-4 text-hashtag text-lg ">
            <p>#no #yes</p>
        </div>
      </div>
      <div className="flex pt-3 cursor-pointer  ">
        <div className=" flex justify-center text-center mr-6">
          <LikeOutlined className="mr-2 mt-1" />
          <p>0</p>
        </div>
        <div className=" flex justify-center text-center mr-6">
          <DislikeOutlined className="mr-2 mt-1" />
          <p>1</p>
        </div>
        <div className=" flex justify-center text-center mr-6">
          <CommentOutlined className="mr-2 mt-1" />
          <p>2</p>
        </div>
      </div>
      <div className="mt-4 flex ">
        <div>
          <Avatar size={48} src={userData? (userData.logo):("")} icon={<UserOutlined />} />
        </div>
        <div className="ml-3 " style={{width:"500px"}} >
          <Input
            placeholder="Comment as territorialsable"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="flex justify-center text-center mt-5 text-sm">
        <p className="text-CommentColor" style={{fontSize:"14px", fontWeight:"600"}} >View Comments</p>
      </div>
    </div>
  );
};

export default FeedPolls;

import React from "react";
import Header from "./Header";
import Left from "./Info/Left";
import Middle from "./Info/Middle";
import Right from "./Info/Right";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const localData = localStorage.getItem(("accessToken"))
  const navigation = useNavigate();
  return (
    <div className="bg-backgroundbody ">
      {
        localData?(
          <>
          <Header />
        <div className="flex">
        <Left />
        <Middle />
        <Right />
      </div>
      </>
        ):(
          navigation('/')
        )
      }
      
    </div>
  );
};

export default Home;

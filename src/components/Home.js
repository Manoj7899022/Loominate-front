
import React from 'react'
import Header from './Header'
import Left from './Info/Left'
import Middle from './Info/Middle'
import Right from './Info/Right'

const Home = () => {
  return (
    <div className='bg-backgroundbody '>
    <Header />
    <div className='flex' >
    <Left />
    <Middle />
    <Right />
    </div>
    </div>
   
  )
}

export default Home
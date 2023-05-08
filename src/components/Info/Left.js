import React from 'react'

const Left = () => {
    const list = [ 'Advice Needed','hi', 'sa', 'Asking For A Colleague..', 'Ask Me Anything', 'Bluecollar Community', 'Burning Issues', 'Career Advice', 'Changemaking' ]

    return (
        
      <div className='w-80' style={{flex: 0.4}}>
          <div style={{backgroundColor: 'white',}} className='flex flex-col items-start ml-20 mt-5 p-5 mb-5 rounded-md'>
              <div className='flex cursor-pointer mb-3 w-full p-2 rounded-md bg-gradient-to-r from-signInActive to-buttonRight  '>
                  <img className='w-4 mr-3' style={{color:"white"}} src='https://www.svgrepo.com/show/483341/home.svg' />
                  <h1 className='text-xl uppercase' style={{color:"white"}} >My Feed</h1>
              </div>
              <div className='flex mb-3 pl-2 cursor-pointer '>
                  <img className='w-4 mr-3' src='https://www.svgrepo.com/show/488260/leaderboard.svg' />
                  <h1 className='text-xl uppercase'>Leaderboard</h1>
              </div>
              <div className='flex mb-3 pl-2 cursor-pointer '>
                  <img className='w-4 mr-3' src='https://www.svgrepo.com/show/512729/profile-round-1342.svg' />
                  <h1 className='text-xl uppercase'>My Profile</h1>
              </div>
          </div>
          <div style={{backgroundColor: 'white'}} className='ml-20 mt-5 p-5 mb-20 rounded-md'>
              <h1 className='text-start text-xl uppercase'>Categories</h1>
              {list.map(category => 
                  <div className='flex flex-row flex-wrap'>
                      <button style={{backgroundColor: '#efefef'}} className='m-1 text-sm font-light p-1 px-2 rounded-lg'>
                          {category}
                      </button>
                  </div>
                  )}
          </div>
          </div>
    )
}

export default Left
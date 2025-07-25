import React from 'react'

function ProfileCard() {
    const user = {
        name : "Ummsi",
        role : "Frontend Developer",
        location: "Pakistan"
    }
  return (
    <div className='h-80 bg-indigo-600 overflow-hidden'>
          <div className='flex justify-center items-center text-white flex-col text-6xl pt-10'>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <p>{user.location}</p>
    </div>
      
    </div>
  )
}

export default ProfileCard

import React from 'react'

const Welcome = (props) => {
  console.log(props);
  



  return (
    <div className='flex flex-col w-full h-auto justify-center items-center text-white flex-nowrap text-3xl font-extrabold'>Hello : {props.name} <div className='font-medium'>
      At: {props.location}
      </div> 
      

    </div>
  )
}

export default Welcome


import React from 'react'

export default function Herosection() {
  return (
    <div className='flex justify-center gap-10 mt-20'>
      <div>
        <h1 className="text-[38px] font-bold">
        Hi, i am Babxn, <br /> 
        Creative Technologist
        </h1>
        <p className="mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptate beatae mollitia <br />
        quisquam quod exercitationem reprehenderit distinctio officia,nemo voluptatibus nam <br /> quo porro repellendus soluta voluptas nobis vel perspiciatis nisi.</p>

         <button className='bg-red-500 p-2 mt-6 text-sm text-white hover:bg-red-600'>
            Download Resume
         </button>
      </div>
        <div>
            <img 
            src="/public/images/prosper portfolio.webp"
            alt="my photo"
            className="w-60 h-60 rounded-full"/>
        </div>
        
    </div>
  )
}

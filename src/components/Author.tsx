import React from 'react'

export default function Author() {
  return (
    
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
     <img className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
     src="../images/girly.jpg" alt='Author image'/>
     <div>
        <h3 className='text-xl font-bold'>
       Javeria Tariq
        </h3>
     <p className='text-slate-500'>{" "}Software Engineer | Web developer | Graphic designer{" "}
     </p>
     <p className='mt-4 text-black leading-relaxed'>
     I am a software engineer and web developer with a strong foundation in programming and web technologies.
     </p>
     <div className='mt-4 flex space-x-3'>
        <a href="#"
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
            Twitter
        </a>
        <a href="#"
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
            Linkedin
        </a>
        <a href="#"
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
            Github
        </a>
     </div>
     </div>
      </div>

    </div>
  )
}

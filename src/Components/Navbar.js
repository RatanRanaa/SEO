import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className=' w-screen bg-white'>
        <div className=' flex items-center justify-between mx-12'>
            <div>
                <img src="/images/Screenshot.webp" alt="logo" />
            </div>
            <div>
                <ul className=' flex'>
                    <li className=' mx-4 font-semibold text-[18px] cursor-pointer hover:text-[#9e3ffd]'>Home</li>
                    <li className=' mx-4 font-semibold text-[18px] cursor-pointer hover:text-[#9e3ffd]'>Plans & Pricing</li>
                    <li className=' mx-4 font-semibold text-[18px] cursor-pointer hover:text-[#9e3ffd]'>Blog</li>
                </ul>
            </div>
            <div>
                <img src="" alt="" />
                <button className=' mx-4 py-3 px-4 '>Log IN</button>
                <button className=' mx-4 border py-3 px-4 bg-blue-700 text-white font-extralight text-[18px] rounded-3xl'>Contact Now</button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar

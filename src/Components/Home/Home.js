import React from 'react'

const Home = () => {
  return (
    <>
      <header id='header' className=''>
        <div className=' z-10 absolute '>
            <div className=' flex items-center justify-between'>
                <div className=' ml-36'>
                    <h1 className=' py- text-6xl font-extrabold'>SEO Made Easy - <span className=' text-[#692aa9]'>SEO</span></h1>
                    <span className=' py-4 text-6xl font-extrabold text-[#692aa9]'>Expressed </span><span className=' text-6xl font-extrabold'>has all the</span>
                    <h1 className=' py-4 text-6xl font-extrabold'>Tools You Need</h1>
                    <h1 className=' py-2 font-medium leading-6 tracking-widest text-[20px] text-[#16163f]'>Looking to boost your website's search</h1>
                    <h1 className=' py-2 font-medium leading-6 tracking-widest text-[20px] text-[#16163f]'>engine optimization? Look no further than</h1>
                    <h1 className=' py-2 font-medium leading-6 tracking-widest text-[20px] text-[#16163f]'>SEO EXPRESSED!</h1>
                    <button className=' mx-4 border mt-5 py-3 px-6 bg-[#7f56e6] text-white font-extralight text-[18px] rounded-3xl'>Contact Now</button>
                </div>
                <div>
                    <img className=' ml-36 mb-38 static z-10' src="./images/_Downloader.webp" alt="logo" width={300} />
                </div>
            </div>
        </div>
        <img className=' w-screen h-[500px] mt-36 static' src="./images/WhatsApp.jpeg" alt="logo" />
    </header>
    </>
  )
}

export default Home

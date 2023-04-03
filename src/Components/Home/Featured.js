import React from 'react'

const Featured = () => {
  return (
    <>
      <div className=" items-center justify-center">
        <div>
          <h1 className=" mx-auto flex items-center justify-center my-10 text-[#9e3ffd] font-bold">
            AS FEATURED ON
          </h1>
        </div>
        <div>
          <ul className=" flex items-center justify-center">
            <li className=" px-20 ">
              <img src="./images/Canva-Logo.webp" alt="logo" width={150} />
            </li>
            <li className=" px-20 ">
              <img src="./images/removebg.webp" alt="logo" width={150} />
            </li>
            <li className=" px-20 ">
              <img src="./images/666.webp" alt="logo" width={150} />
            </li>
            <li className=" px-20 ">
              <img src="./images/semrush.webp" alt="logo" width={150} />
            </li>
            <li className=" px-20 ">
              <img src="./images/ahrefs.webp" alt="logo" width={150} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1 className=" mx-auto flex items-center justify-center mt-10 mb-5 text-[#9e3ffd] font-bold">
            We Build Trust
          </h1>
          <h1 className=" text-4xl flex items-center justify-center font-bold">
            Industry Experts
          </h1>
        </div>
        <div className=" flex items-center justify-between mx-24">
          <div className="  flex justify-center flex-col h-[600px] mb-32">
            <img src="./images/dl.webp" alt="logo" />
            <h1 className=" font-bold">Customer Support 24/7</h1>
            <p className=" w-80 flex items-center ">
              SEO Expressed is always available to help and provide expert
              advice on search engine optimization. With round-the-clock
              availability, their team of professionals is dedicated to helping
              businesses maximize their online presence and drive traffic to
              their websites.
            </p>
          </div>
          <div className=" flex justify-center flex-col h-[600px] mb-32">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_15b0a68205a543a6a32c8f3607f18e9b~mv2.png/v1/fill/w_215,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dl_beatsnoop_com-a65qoEnc1h__1_-removebg-preview.png"
              alt="logo" width={200}
            />
            <h1 className=" font-bold">Customer Support 24/7</h1>
            <p className=" w-80 flex items-center ">
              SEO Expressed is always available to help and provide expert
              advice on search engine optimization. With round-the-clock
              availability, their team of professionals is dedicated to helping
              businesses maximize their online presence and drive traffic to
              their websites.
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col h-[600px]">
            <img
              src="https://th.bing.com/th/id/OIP.dINxVO2FJ8aU-xd3SuQvIgHaHa?pid=ImgDet&rs=1"
              alt="logo"
              width={200}
            />
            <h1 className=" font-bold">Customer Support 24/7</h1>
            <p className=" w-80 flex items-center ">
            We are transparent and reliable in providing search engine optimization services and products. With a commitment to 100% trustworthiness, we prioritize customer satisfaction and ensure that all of our clients receive the highest quality of service. Our team of experienced professionals works tirelessly to deliver measurable results, helping businesses achieve their online marketing goals. Customers can trust us that we will receive honest and reliable service every time.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=' h-[400px] w-screen bg-[#16163f]'>
        <div className=' flex items-center justify-center flex-col'>
            <h1 className=' text-4xl text-white mt-16'>We’re Good with Numbers</h1>
            <ul className=' flex items-center justify-center mx-auto'>
                <li className=' mx-16 mt-16'>
                    <h1 className=' text-8xl text-white font-bold ml-8'>2</h1>
                    <h1 className=' text-white text-2xl font-light'>Years of Trust</h1>
                </li>
                <li className=' mx-16 mt-16'>
                    <h1 className=' text-8xl text-white font-bold ml-4'>679</h1>
                    <h1 className=' text-white text-2xl font-light'>Satisfied Customer</h1>
                </li>
                <li className=' mx-16 mt-16'>
                    <h1 className=' text-8xl text-white font-bold ml-1'>13</h1>
                    <h1 className=' text-white text-2xl font-light'>Team Members</h1>
                </li>
                <li className=' mx-16 mt-16'>
                    <h1 className=' text-8xl text-white font-bold ml-1'>34</h1>
                    <h1 className=' text-white text-2xl font-light'>Web Partners</h1>
                </li>
            </ul>
        </div>
        </div>
      </div>
    </>
  )
}

export default Featured

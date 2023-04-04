import React from 'react'
import { useNavigate } from "react-router-dom";


const Home = () => {
  const history = useNavigate();

  return (
    <>
      <header id='header' className=''>
        <div className=''>
          <div className=''>
            <img className=' w-screen h-screen absolute' src="./images/WhatsApp.jpeg" alt="logo" />
          </div>
            <div className=' relative flex items-center justify-between mx-36 '>
                <div className=''>
                    <h1 className='   sm:text-6xl       md:text-6xl font-extrabold'>SEO Made Easy - <span className=' text-[#692aa9]'>SEO</span></h1>
                    <span className=' sm:text-6xl  py-4 md:text-6xl font-extrabold text-[#692aa9]'>Expressed </span><span className=' sm:text-6xl md:text-6xl font-extrabold'>has all the</span>
                    <h1 className='   sm:text-6xl  py-4 md:text-6xl font-extrabold'>Tools You Need</h1>
                    <h1 className='   sm:text-1xl  py-2 md:font-medium leading-6 tracking-widest text-[20px] text-[#16163f]'>Looking to boost your website's search</h1>
                    <h1 className='   sm:text-1xl  py-2 md:font-medium leading-6 tracking-widest text-[20px] text-[#16163f]'>engine optimization? Look no further than</h1>
                    <h1 className='   sm:text-1xl  py-2 md:font-medium leading-6 tracking-widest text-[20px] text-[#16163f]'>SEO EXPRESSED!</h1>
                    <button className=' font-medium mx-4 border mt-5 py-3 px-6 bg-[#7f56e6] text-white text-[18px] rounded-3xl'><a href="https://mail.google.com">Contact Now</a></button>
                </div>
                <div className=' relative'>
                    <img className='' src="./images/_Downloader.webp" alt="logo" width={300} />
                </div>
            </div>
        </div>
    </header>
    <div className=' h-[350px] w-screen bg-[#9e3ffd] relative mt-48'>
      <div className=' flex items-center justify-center flex-col'>
        <h1 className=' text-3xl text-white mt-16'>- Launch Sale -</h1>
        <h1 className=' text-6xl text-white py-6 font-bold'>Get 30% Off</h1>
        <button onClick={() => history("/plans")} className=' border px-16 py-2 bg-white text-[#9e3ffd]'>Buy Now</button>
      </div>
    </div>
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
      <div>
        <div>
          <div className=" flex justify-between w-screen h-screen">
            <div className=" w-[100%] border">
              <div className=" ml-28 mt-20">
                <h1 className=" text-[#9e3ffd] font-bold my-5 tracking-widest">
                  ABOUT
                </h1>
                <h1 className=" text-4xl font-semibold">Powering your</h1>
                <h1 className=" text-4xl font-semibold">online success.</h1>
              </div>
              <div className=" w-96 ml-28 mt-5">
                <h1 className=" mt-5 font-normal">
                  At SEO Expressed, we understand that SEO can be expensive,
                  which is why we have created a solution that enables our
                  clients to access the same high-quality tools and resources at
                  a fraction of the cost.
                </h1>
                <h1 className=" mt-5 font-normal">
                  Our collaborative buying model allows us to pool resources and
                  negotiate deals with top SEO tool providers, which we then
                  pass on to our clients.We are passionate about helping our
                  clients suced online, and we believe that access to the right
                  tools and resources is essential for achieving that success.
                </h1>
                <h1 className=" mt-5 font-normal">
                  Our team of experienced professionals is dedicated to
                  providing exceptional customer service and support, ensuring
                  that our clients have everything they need to improve their
                  website's SEO performance and drive more traffic to their
                  site.
                </h1>
                <h1 className=" mt-5 font-normal truncate">
                  Whether you are an individual looking to improve your personal
                  website's SEO or a small business wanting to increase your
                  online visibility, SEO Expressed can help. With our affordable
                  SEO tools and resources, you can achieve your digital
                  marketing goals and take your online presence to the next
                  level."
                </h1>
              </div>
            </div>
            <div className=" w-[100%] border ">
              <img className=' h-full' src="./images/About.jpeg" alt="logo" width={800} />
            </div>
          </div>
        </div>
        <div className=' w-screen h-[500px] bg-[#9e3ffd]'>
            <div>
                <div >
                    <h1 className=' text-white flex items-center justify-center py-12 tracking-widest'>Customer Reviews</h1>
                    <p className=' text-3xl text-white w-96 text-center m-auto mb-4'>I've used SEO Expressed and I am really satisfied with the products and services they offer. They are best in the market.</p>
                    <h1 className=' text-white flex items-center justify-center mt-10 text-2xl'>Ashutosh Saini</h1>
                    <p className=' text-white flex items-center justify-center'>India</p>
                </div>
            </div>
        </div>
      </div>
      <div className=' flex items-center justify-center flex-col'>
        <h1 className=' text-[#9e3ffd] my-6'>FAQs</h1>
        <h1 className=' text-4xl'>Any Questions? We got you</h1>
      <div className=' flex justify-between h-screen'>
        <div>
            <div className=' flex items-center justify-center flex-col'>
            <div className=' w-[600px]'>
            <h1 className=' text-2xl font-normal flex items-center justify-center mt-20'>What Would Be The Access Mode?</h1>
            <p className='  w-96 flex items-center justify-center mx-auto mt-4'>We are currently offering Access through an extension, you will have to download our extension and install it in chrome. An access guide has been provided in Member Dashboard</p>
            </div>
            <div className=' w-[600px]'>
            <h1 className=' text-2xl font-normal flex items-center justify-center mt-20'>Can I Use My Tool On Office As Well?</h1>
            <p className='  w-96 flex items-center justify-center mx-auto mt-4'>We are currently offering Access through an extension, you will have to download our extension and install it in chrome. An access guide has been provided in Member Dashboard</p>
            </div>
            <div className=' w-[600px]'>
            <h1 className=' text-2xl font-normal flex items-center justify-center mt-20'>How Would I Get Access ?</h1>
            <p className='  w-96 flex items-center justify-center mx-auto mt-4'>We are proud to say that our live chat support replies Quickly & Available the Whole day to assist our Users. We also Offer Anydesk support to Our Users.</p>
            </div>
            </div>
        </div>
        <div>
            <div className=' flex items-center justify-center flex-col'>
            <div className=' w-[600px]'>
            <h1 className=' text-2xl font-normal flex items-center justify-center mt-20'>Do Your Offer Refunds ?</h1>
            <p className='  w-96 flex items-center justify-center mx-auto mt-4'>Not at All , We only & Only Refund if our tools don’ t work or more than 24 Hours. Make sure to clear anything from the Live Chat Support Before Buying Anything.  Read our Refund Policy For More  Info.</p>
            </div>
            <div className=' w-[600px]'>
            <h1 className=' text-2xl font-normal flex items-center justify-center mt-20'>Can I Share My Account?</h1>
            <p className='  w-96 flex items-center justify-center mx-auto mt-4'>No, We don’t allow account sharing. Single Account for single user. If you shared your account with someone, Our system will autoblock your Account.</p>
            </div>
            <div className=' w-[600px]'>
            <h1 className=' text-2xl font-normal flex items-center justify-center mt-20'>Can I Expect A Good Support ?</h1>
            <p className='  w-96 flex items-center justify-center mx-auto mt-4'>We are proud to say that our live chat support replies Quickly & Available the Whole day to assist our Users. We also Offer Anydesk support to Our Users.</p>
            </div>
            </div>
        </div>
        {/* <div className=' border-2 w-[600px]'></div> */}
      </div>
    </div>
    <div className=" bg-[#f9f3ff]">
      <h1 className=" flex items-center justify-center py-10 font-extrabold text-4xl text-gray-700 tracking-normal">Best Sellers</h1>
      <div className=" bg-white p-20 w-[1400px] flex items-center justify-center mx-auto">
        <div className=" flex items-cente justify-cente">
          <div className=" border mx-6 h-[996] w-60 flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_f43e7757c6184093b309914a58b66270~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_f43e7757c6184093b309914a58b66270~mv2.png"
              alt="logo"
            />
            <h1 className=" my-4 font-bold tracking-widest">Silver plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" py-5 font-light">All Basic SEO tools</h1>
            <h1 className=" font-light">Valid until canceled</h1>
            <h1 className=" font-light">one day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Select
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">UberSuggest</h1>
            <h1 className=" pt-4 font-light">Grammerly</h1>
            <h1 className=" pt-4 font-light">Sem Rush</h1>
          </div>
          <div className=" border h-[596] mx-6 w-60 flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_9ccb4242e5564583b3d04328623d5788~mv2.png/v1/fill/w_296,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_9ccb4242e5564583b3d04328623d5788~mv2.png"
              alt="logo"
            />
            <h1 className=" my-4 font-bold tracking-widest">Gold plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">15</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" pt-5 font-light">Everything in Silver Plan</h1>
            <h1 className=" font-light mb-6"> + More</h1>
            <h1 className=" font-light">Valid until canceled</h1>
            <h1 className=" font-light">one day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Select
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1>
            <h1 className=" font-light">plan</h1>
            <h1 className=" pt-4 font-light">Majestic</h1>
            <h1 className=" pt-4 font-light">Moz Pro</h1>
            <h1 className=" pt-4 font-light">Buzzsumo</h1>
            <h1 className=" pt-4 font-light">Spyfu</h1>
            <h1 className=" pt-4 font-light">Woorank</h1>
            <h1 className=" pt-4 font-light">Spamzilla</h1>
          </div>
          <div className=" border mx-6 w-60 flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_fbdd4ecd85934ac78b377a1177d0dcf5~mv2.png/v1/fill/w_289,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_fbdd4ecd85934ac78b377a1177d0dcf5~mv2.png"
              alt="logo"
            />
            <h1 className=" my-4 font-bold tracking-widest">Gold plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">29</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" pt-5 font-light">Everything in Silver Plan</h1>
            <h1 className=" font-light mb-6"> + More</h1>
            <h1 className=" font-light">Valid until canceled</h1>
            <h1 className=" font-light">one day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Select
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1>
            <h1 className=" font-light">plan</h1>
            <h1 className=" pt-4 font-light">Storyblocks</h1>
            <h1 className=" pt-4 font-light">Helium 10</h1>
            <h1 className=" pt-4 font-light">Jungle Scout</h1>
            <h1 className=" pt-4 font-light">Canva Pro</h1>
            <h1 className=" pt-4 font-light">Pickmonkey</h1>
            <h1 className=" pt-4 font-light">Crello</h1>
            <h1 className=" pt-4 font-light">Indexification</h1>
            <h1 className=" pt-4 font-light">Instatext</h1>
            <h1 className=" pt-4 font-light">Quilbot</h1>
            <h1 className=" pt-4 font-light">Envato Elements</h1>
            <h1 className=" pt-4 font-light">Kwfinder</h1>
            <h1 className=" pt-4 font-light">Rytr.ai</h1>
            <h1 className=" pt-4 font-light">Spotify</h1>
            <h1 className=" pt-4 font-light">Ahref</h1>
          </div>
          <div className=" border mx-6 w-60 flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            />
            <h1 className=" my-4 font-bold tracking-widest">Gold plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">29</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" pt-5 font-light">Everything in</h1>
            <h1 className=" font-light mb-6"> Diamond Plan + More</h1>
            <h1 className=" font-light">Valid until canceled</h1>
            <h1 className=" font-light">one day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Select
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1>
            <h1 className=" font-light">plan</h1>
            <h1 className=" pt-4 font-light">Storyblocks</h1>
            <h1 className=" pt-4 font-light">Helium 10</h1>
            <h1 className=" pt-4 font-light">Jungle Scout</h1>
            <h1 className=" pt-4 font-light">Canva Pro</h1>
            <h1 className=" pt-4 font-light">Pickmonkey</h1>
          </div>
        </div>
      </div>
    </div>
    <div className=" bg-[#f9f3ff]">
      <h1 className=" flex items-center justify-center py-20 text-4xl font-bold">
        Individual Plan
      </h1>
      <div className=" bg-white p-20 w-[1400px] flex items-center justify-center mx-auto">
        <div className=" flex items-center justify-center">
          <div className=" border mx-6 h-[996] w-60 flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_9ab7c271931f470794f99d26e00d5d84~mv2.webp"
              alt="logo"
            />
            <h1 className=" my-4 font-bold tracking-widest">Veed.io</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=' py-5 font-light'>All Basic SEO tools</h1> */}
            <h1 className=" font-light">Valid until canceled</h1>
            <h1 className=" font-light">one day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Select
            </button>
            <h1 className=" border-t-2 px-12 py-6 font-light">Veed.io</h1>
            {/* <h1 className=' pt-4 font-light'>Grammerly</h1>
                <h1 className=' pt-4 font-light'>Sem Rush</h1> */}
          </div>
          <div className=" border mx-6 h-[996] w-60 flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_418267f6aa9c499192ab25919d3af73c~mv2.jpeg/v1/fill/w_296,h_200,fp_0.23_0.50,lg_1,q_80,enc_auto/d4d6f6_418267f6aa9c499192ab25919d3af73c~mv2.jpeg"
              alt="logo"
            />
            <h1 className=" my-4 font-bold tracking-widest">Veed.io</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=' py-5 font-light'>All Basic SEO tools</h1> */}
            <h1 className=" font-light">Valid until canceled</h1>
            <h1 className=" font-light">one day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Select
            </button>
            <h1 className=" border-t-2 px-12 py-6 font-light">Veed.io</h1>
            {/* <h1 className=' pt-4 font-light'>Grammerly</h1>
                <h1 className=' pt-4 font-light'>Sem Rush</h1> */}
          </div>
          <div className=" border mx-6 h-[996] w-60 flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_29e3cde9d89548ef82e09ec40219579b~mv2.png/v1/fill/w_289,h_200,fp_0.23_0.50,lg_1,q_85,enc_auto/d4d6f6_29e3cde9d89548ef82e09ec40219579b~mv2.png"
              alt="logo"
            />
            <h1 className=" my-4 font-bold tracking-widest">Veed.io</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=' py-5 font-light'>All Basic SEO tools</h1> */}
            <h1 className=" font-light">Valid until canceled</h1>
            <h1 className=" font-light">one day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Select
            </button>
            <h1 className=" border-t-2 px-12 py-6 font-light">Veed.io</h1>
            {/* <h1 className=' pt-4 font-light'>Grammerly</h1>
                <h1 className=' pt-4 font-light'>Sem Rush</h1> */}
          </div>
          <div className=" border mx-6 h-[996] w-60 flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_a0591139935f48458ae13333baf6a399~mv2.jpg/v1/fill/w_280,h_200,fp_0.23_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d4d6f6_a0591139935f48458ae13333baf6a399~mv2.jpg"
              alt="logo"
            />
            <h1 className=" my-4 font-bold tracking-widest">Veed.io</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=' py-5 font-light'>All Basic SEO tools</h1> */}
            <h1 className=" font-light">Valid until canceled</h1>
            <h1 className=" font-light">one day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Select
            </button>
            <h1 className=" border-t-2 px-12 py-6 font-light">Veed.io</h1>
            {/* <h1 className=' pt-4 font-light'>Grammerly</h1>
                <h1 className=' pt-4 font-light'>Sem Rush</h1> */}
          </div>
        </div>
      </div>
      <div className=' flex items-center justify-center py-20'>
      <button onClick={() => history("/plans")} className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">View All</button>
      </div>
    </div>
    <div className=' flex items-center justify-between w-screen'>
      <div className=' border w-[100%] h-[600px] pl-36 pt-24'>
        <h1 className=' text-[#9e3ffd] tracking-widest'>Contact</h1>
        <h1 className=' text-3xl py-4 font-bold'>Drop your queries</h1>
        <h1 className=' font-bold py-1'>140E Hartsdale Avenue New York </h1>
        <h1 className=' font-bold py-1'>United States</h1>
        <h1 className=' font-bold py-1'>seoexpressed@gmail.com</h1>
        <div>
        <i class=" px-4 font-medium py-12 text-2xl fa-brands fa-instagram"></i>
        <i class=" px-4 font-medium py-12 text-2xl fa-brands fa-linkedin-in"></i>
        <i class=" px-4 font-medium py-12 text-2xl fa-brands fa-facebook-f"></i>
        <i class=" px-4 font-medium py-12 text-2xl fa-brands fa-twitter"></i>
        </div>
      </div>
      <div className=' border w-[100%] h-[600px]'>
        <form action="">
            <div className=' flex m-10'>
                <div>
                    <label htmlFor="">First Name</label><br />
                    <input className=' mt-10 border-b-2' type="text" />
                </div>
                <div className=' ml-10'>
                    <label htmlFor="">Last Name</label><br />
                    <input className=' mt-10 border-b-2' type="text" />
                </div>
            </div>
            <div className=' m-10'>
                <label htmlFor="">Email</label><br />
                <input className=' mt-10 border-b-2 w-96' type="text" />
            </div>
            <div className=' m-10'>
                <label className=' ' htmlFor="">Leave us a message...</label><br />
                <input className=' mt-10 border-b-2 w-96' type="text" />
            </div>
            <button className='  mx-12 border py-3 px-4 bg-[#9e3ffd] text-white font-extralight text-[18px] rounded-3xl'>Contact Now</button>
        </form>
      </div>
    </div>
    <div>
        <div className=' w-screen h-[100px]'>
            <iframe title='abc' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.00050837269!2d77.19260042525525!3d28.61476542969911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99ba1e313%3A0x7ed0da6bc307aa30!2sRashtrapati%20Bhawan%2C%20President&#39;s%20Estate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1680488467865!5m2!1sen!2sin" width={1520} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default Home

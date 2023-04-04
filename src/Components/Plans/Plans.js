import React from 'react'

const Plans = () => {
  return (
    <div>
      <div>
        <h1 className=' text-gray-700 text-8xl font-extrabold flex items-center justify-center mt-48'>Choose your pricing</h1>
        <h1 className=' text-gray-700 text-8xl font-extrabold flex items-center justify-center '>plan</h1>
        <p className='  text-gray-700 font-normal text-4xl flex items-center justify-center py-10'>Find one that works for you</p>
      </div>
    <div>
      <div className=" flex items-cente justify-cente ">
          <div className=" border mx-auto h-[996] w-80 flex items-center flex-col overflow-hidden">
            
            <h1 className=" my-4 text-2xl font-bold tracking-widest">Silver plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" py-5 font-light">All Basic SEO Tools</h1>
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Start Free Trial
            </button>
            <h1 className="  border-t-2 pt-6 font-bold"> <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check px-3"></i> UberSuggest</h1>
            <h1 className=" pt-4 font-bold"> <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check px-3"></i>Grammerly</h1>
            <h1 className=" pt-4 font-bold"> <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check px-3"></i>Sem Rush</h1>
          </div>
          <div className=" border mx-auto h-[996] w-80 flex items-center flex-col overflow-hidden">
            
          <h1 className=" my-4 font-bold tracking-widest">Gold plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">15</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" pt-5 font-light">Everything in Silver Plan</h1>
            <h1 className=" font-light mb-6"> + More</h1>
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              Start Free Trial
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">
            <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Everything in Silver
            </h1>
            <h1 className=" font-light"> plan</h1>
            <h1 className=" pt-4 font-light"> <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Majestic</h1>
            <h1 className=" pt-4 font-light"> <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Moz Pro</h1>
            <h1 className=" pt-4 font-light"> <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Buzzsumo</h1>
            <h1 className=" pt-4 font-light"> <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Spyfu</h1>
            <h1 className=" pt-4 font-light"> <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Woorank</h1>
            <h1 className=" pt-4 font-light"> <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Spamzilla</h1>
          </div>
          <div className=" border mx-auto h-[996] w-80 flex items-center flex-col overflow-hidden">
            
          <h1 className=" my-4 font-bold tracking-widest">Gold plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">49</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" pt-5 font-light">Everything in Silver Plan</h1>
            <h1 className=" font-light mb-6"> + More</h1>
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
              <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Start Free Trial
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">
            <i class=" text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Everything in Silver
            </h1>
            <h1 className=" font-light">plan</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Storyblocks</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Helium 10</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Jungle Scout</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Canva Pro</h1>
          </div>
        </div>
      </div>
      <div className=' container mt-10'>
        <div className=' grid gap-x-8  grid-cols-3'>
          {/* <div className=' border'>1</div> */}
          <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Diamond plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">29</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1>
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-6">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1>
            <h1 className=" font-light">plan</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Storyblocks</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Helium 10</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Jungle Scout</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Canva Pro</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Pickmonkey</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Storyblocks</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Helium 10</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Jungle Scout</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Canva Pro</h1>
          </div>
          <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Diamond plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">29</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-6">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> semrush Guru</h1>
          </div>
          <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Diamond plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">29</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-6">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Semrush Business</h1>
          </div>
          {/* <div className=' border'>2</div> */}
          {/* <div className=' border'>2</div> */}
        </div>
      </div>
      <div className=' container mt-10'>
        <div className=' grid gap-x-8  grid-cols-3'>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Diamond plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">5</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> SpyFu</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Diamond plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">3</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> SERPStat</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Diamond plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">5</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> MAJESTIC</h1>
          </div>
        </div>
      </div>
      <div className=' container mt-10'>
        <div className=' grid gap-x-8  grid-cols-3'>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Woorank</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">5</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Wooran</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">SimilarWeb plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> SimilarWeb</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Kwfinder plan</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">7</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Kwfinder Premium</h1>
          </div>
        </div>
      </div>
      <div className=' container mt-10'>
        <div className=' grid gap-x-8  grid-cols-3'>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Copy.ai</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Copy ai</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Instatext</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">5</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Instatext</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Quilbot</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">5</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Quilbot</h1>
          </div>
        </div>
      </div>
      <div className=' container mt-10'>
        <div className=' grid gap-x-8  grid-cols-3'>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Article Builder</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">4</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Article Builder</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">BuzzSumo</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">3</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> BuzzSumo</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Rytr</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Rytr</h1>
          </div>
        </div>
      </div>
      <div className=' container mt-10'>
        <div className=' grid gap-x-8  grid-cols-3'>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">ADSPY</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> ADSPY</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">BigSpy</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> BigSpy</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Zik Analytics</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Zik Analytics</h1>
          </div>
        </div>
      </div>
      <div className=' container mt-10'>
        <div className=' grid gap-x-8  grid-cols-3'>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Envato Elements</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">5</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Envato Elements</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Vistacreate</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Vistacreate</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest "> Veed.io</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Veed.io</h1>
          </div>
        </div>
      </div>
      <div className=' container mt-10'>
        <div className=' grid gap-x-8  grid-cols-3'>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Canva Pro</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">3</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> CanvaPro</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">StoryBlocks</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> StoryBlocks</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            {/* <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            /> */}
            <h1 className=" my-4 text-2xl font-bold tracking-widest "> Diamond Plans</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">0</h1>
            </div>
            <h1 className=' pt-5'>Semrush canva</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            {/* <h1 className=" font-light">Valid until canceled</h1> */}
            <h1 className=" font-light pt-24">Free Plan</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Semrush</h1>
            <h1 className=" w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Canva</h1>
          </div>
        </div>
      </div>
      <div className=' container mt-10'>
        <div className=' grid gap-x-8  grid-cols-3'>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            />
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">GOLD PLAN</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-8xl font-extrabold ">15</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1>
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            <h1 className=" font-light pt-4">Valid until canceled</h1>
            <h1 className=" font-light">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            <h1 className=" border-t-2 px-12 pt-6 font-light">
            <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Everything in Silver
            </h1>
            {/* <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> CanvaPro</h1> */}
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Majestic</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Moz Pro</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Buzzsumo</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Spyfu</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Woorank</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Spamzilla</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            />
            <h1 className=" my-4 text-2xl font-bold tracking-widest ">Diamond PLAN</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-8xl font-extrabold ">29</h1>
            </div>
            <h1>Every Month</h1>
            <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1>
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            <h1 className=" font-light pt-4">Valid until canceled</h1>
            <h1 className=" font-light">1 day free trail</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>{/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> StoryBlocks</h1>
            {/* <h1 className=" font-light">plan</h1> */}
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Storyblocks</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Helium 10</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Jungle Scout</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Canva Pro</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Pickmonkey</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Crello</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Indexification</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Instatext</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Quilbot</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Envato Elements</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Kwfinder</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Rytr.ai</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Spotify</h1>
            <h1 className=" pt-4 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Ahref</h1>
          </div>
        <div className=" border w-80 mx-auto flex items-center flex-col overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
            />
            <h1 className=" my-4 text-2xl font-bold tracking-widest "> Vistacreate Plans</h1>
            <div className=" flex">
              <pre>$</pre>
              <h1 className=" text-6xl ">10</h1>
            </div>
            <h1 className=' pt-5'>Every Month</h1>
            {/* <h1 className=" pt-5 font-light">Everything in Gold Plan + More</h1> */}
            {/* <h1 className=" font-light mb-6"> Diamond Plan + More</h1> */}
            <h1 className=" font-light pt-5">Valid until canceled</h1>
            <h1 className=' font-light pt-5'>1 day free trail</h1>
            <h1 className=" font-light pt-2">Free Plan</h1>
            <button className=" border px-12 mt-6 mb-5 py-3 bg-[#9e3ffd] text-white tracking-widest">
              Start Free trial
            </button>
            {/* <h1 className=" border-t-2 px-12 pt-6 font-light">
              Everything in Silver
            </h1> */}
            <h1 className=" border-t-2 w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Vistacreate</h1>
            {/* <h1 className=" w-full text-center py-6 font-light"> <i class=" px-3 text-[#9e3ffd] fa-sharp fa-solid fa-circle-check"></i> Canva</h1> */}
          </div>
        </div>
      </div>
      <h1 className=' py-4 text-gray-500 flex items-center justify-center'>© 2023 by SEO Expressed. Powered and secured by SEO Expressed Team</h1>
    </div>
  )
}

export default Plans

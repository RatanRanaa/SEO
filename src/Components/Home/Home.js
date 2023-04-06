import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const history = useNavigate()

  return (
    <>
      <header id="header" className="relative">
        <div className="">
          <div className="">
            <img
              className="w-full h-screen absolute inset-0 object-cover"
              src="./images/WhatsApp.jpeg"
              alt="logo"
            />
          </div>
          <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="">
                <h1 className="text-4xl sm:text-5xl md:text-6xl mt-20 font-extrabold leading-tight">
                  SEO Made Easy - <span className="text-[#692aa9]">SEO</span>
                </h1>
                <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#692aa9]">
                  Expressed{' '}
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                  has all the
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                  Tools You Need
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl font-medium leading-6 tracking-widest text-gray-900 pt-6">
                  Looking to boost your website's search
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl font-medium leading-6 tracking-widest text-gray-900">
                  engine optimization? Look no further than
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl font-medium leading-6 tracking-widest text-gray-900">
                  SEO EXPRESSED!
                </h1>
                <button className="font-medium border mt-5 py-3 px-6 bg-[#7f56e6] text-white text-lg rounded-3xl">
                  <a href="https://mail.google.com">Contact Now</a>
                </button>
              </div>
              <div className="hidden md:block md:ml-10 md:w-1/2 mt-10">
                <img className="" src="./images/_Downloader.webp" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[400px] mt-32 bg-[#9e3ffd] relative">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl text-white mt-8 sm:mt-16 md:mt-20 lg:mt-2">
            - Launch Sale -
          </h1>
          <h1 className="text-6xl text-white py-6 font-bold sm:text-7xl md:text-8xl">
            Get 30% Off
          </h1>
          <button
            onClick={() => history('/plans')}
            className="border px-8 py-2 bg-white text-[#9e3ffd] text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="my-10 text-[#9e3ffd] font-bold text-center">
          AS FEATURED ON
        </h1>
        <ul className="flex flex-wrap justify-center items-center">
          <li className="px-10 py-5">
            <img
              src="./images/Canva-Logo.webp"
              alt="logo"
              className="w-32 h-auto"
            />
          </li>
          <li className="px-10 py-5">
            <img
              src="./images/removebg.webp"
              alt="logo"
              className="w-32 h-auto"
            />
          </li>
          <li className="px-10 py-5">
            <img src="./images/666.webp" alt="logo" className="w-32 h-auto" />
          </li>
          <li className="px-10 py-5">
            <img
              src="./images/semrush.webp"
              alt="logo"
              className="w-32 h-auto"
            />
          </li>
          <li className="px-10 py-5">
            <img
              src="./images/ahrefs.webp"
              alt="logo"
              className="w-32 h-auto"
            />
          </li>
        </ul>
      </div>

      <div>
        <div>
          <h1 className="mx-auto flex items-center justify-center mt-10 mb-5 text-[#9e3ffd] font-bold text-center sm:text-left">
            We Build Trust
          </h1>
          <h1 className="text-4xl flex items-center justify-center font-bold text-center sm:text-left">
            Industry Experts
          </h1>
        </div>
        <div
          id="industry"
          className="flex flex-col sm:flex-row items-center justify-between mx-4 sm:mx-24"
        >
          <div className="flex justify-center flex-col h-[500px] mb-10 sm:mb-0 md:mt-32">
            <img src="./images/dl.webp" alt="logo" className="mx-auto" />
            <h1 className="font-bold text-center mt-5 mb-2">
              Customer Support 24/7
            </h1>
            <p className="w-full px-4 flex items-center text-center overflow-hidden">
              SEO Expressed is always available to help and provide expert
              advice on search engine optimization. With round-the-clock
              availability, their team of professionals is dedicated to helping
              businesses maximize their online presence and drive traffic to
              their websites.
            </p>
          </div>
          <div className="flex justify-center flex-col h-[500px] mb-10 sm:mb-0 md:mt-32">
            <img
              src="https://static.wixstatic.com/media/d4d6f6_15b0a68205a543a6a32c8f3607f18e9b~mv2.png/v1/fill/w_215,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dl_beatsnoop_com-a65qoEnc1h__1_-removebg-preview.png"
              alt="logo"
              className="mx-auto"
            />
            <h1 className="font-bold text-center mt-5 mb-2">
              Customer Support 24/7
            </h1>
            <p className="w-full px-4 flex items-center text-center overflow-hidden">
              SEO Expressed is always available to help and provide expert
              advice on search engine optimization. With round-the-clock
              availability, their team of professionals is dedicated to helping
              businesses maximize their online presence and drive traffic to
              their websites.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col h-[500px]  mb-10 sm:mb-0 md:mt-32">
            <img src="./images/dl.webp" alt="logo" className="mx-auto" />
            <h1 className="font-bold text-center mt-5 mb-2">
              Customer Support 24/7
            </h1>
            <p className="w-full px-4 flex items-center text-center overflow-hidden">
              We are transparent and reliable in providing search engine
              optimization services and products. With a commitment to 100%
              trustworthiness, we prioritize customer satisfaction and ensure
              that all of our clients receive the highest quality of service.
              Our team of experienced professionals works tirelessly to deliver
              measurable results, helping businesses achieve their online
              marketing goals. Customers can trust us that we will receive
              honest and reliable service every time.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-[#16163f]">
        <div className="mx-auto px-6 py-12 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <h1 className="text-4xl font-bold text-white mt-16 mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
              We’re Good with Numbers
            </h1>
            <ul className="flex flex-wrap justify-center -mx-4">
              <li className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <h1 className="text-8xl font-bold text-white ml-8 mb-2 sm:text-9xl md:text-7xl">
                  2
                </h1>
                <h1 className="text-2xl font-light text-white">
                  Years of Trust
                </h1>
              </li>
              <li className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <h1 className="text-8xl font-bold text-white ml-4 mb-2 sm:text-9xl md:text-7xl">
                  679
                </h1>
                <h1 className="text-2xl font-light text-white">
                  Satisfied Customers
                </h1>
              </li>
              <li className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <h1 className="text-8xl font-bold text-white ml-1 mb-2 sm:text-9xl md:text-7xl">
                  13
                </h1>
                <h1 className="text-2xl font-light text-white">Team Members</h1>
              </li>
              <li className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <h1 className="text-8xl font-bold text-white ml-1 mb-2 sm:text-9xl md:text-7xl">
                  34
                </h1>
                <h1 className="text-2xl font-light text-white">Web Partners</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-between h-full overflow-hidden">
          <div className="w-full md:w-1/2 h-full bg-white px-6 md:px-16 py-8 md:py-20 flex flex-col justify-center">
            <h1 className="text-purple-600 font-bold my-5 tracking-widest text-center md:text-left">
              ABOUT
            </h1>
            <h1 className="text-4xl font-semibold text-center md:text-left">
              Powering your online success.
            </h1>
            <div className="mt-8 md:mt-12">
              <h1 className="font-normal text-center md:text-left">
                At SEO Expressed, we understand that SEO can be expensive, which
                is why we have created a solution that enables our clients to
                access the same high-quality tools and resources at a fraction
                of the cost.
              </h1>
              <h1 className="mt-5 font-normal text-center md:text-left">
                Our collaborative buying model allows us to pool resources and
                negotiate deals with top SEO tool providers, which we then pass
                on to our clients. We are passionate about helping our clients
                succeed online, and we believe that access to the right tools
                and resources is essential for achieving that success.
              </h1>
              <h1 className="mt-5 font-normal text-center md:text-left">
                Our team of experienced professionals is dedicated to providing
                exceptional customer service and support, ensuring that our
                clients have everything they need to improve their website's SEO
                performance and drive more traffic to their site.
              </h1>
              <h1 className="mt-5 font-normal text-center md:text-left">
                Whether you are an individual looking to improve your personal
                website's SEO or a small business wanting to increase your
                online visibility, SEO Expressed can help. With our affordable
                SEO tools and resources, you can achieve your digital marketing
                goals and take your online presence to the next level.
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <img
              id="about-img"
              className="h-full w-full object-cover"
              src="./images/About.jpeg"
              alt="about-img"
            />
          </div>
        </div>

        <div className="h-[500px] bg-purple-600 flex flex-col justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white font-bold text-4xl tracking-widest mb-12">
              Customer Reviews
            </h1>
            <p className="text-white text-2xl mb-4">
              "I've used SEO Expressed and I am really satisfied with the
              products and services they offer. They are the best in the
              market."
            </p>
            <h1 className="text-white text-3xl mb-2">Ashutosh Saini</h1>
            <p className="text-white text-xl mb-4">India</p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center flex-col">
        <h1 class="text-[#9e3ffd] my-6 text-center md:text-left">FAQs</h1>
        <h1 class="text-4xl text-center md:text-left">
          Any Questions? We got you
        </h1>
        <div id="faqs" class="flex flex-col md:flex-row md:h-screen">
          <div id="faq" class="w-full md:w-1/2">
            <div class="flex items-center justify-center flex-col">
              <div class="w-full md:w-3/4">
                <h1 class="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  What Would Be The Access Mode?
                </h1>
                <p class="w-full flex items-center justify-center mx-auto text-center px-10  mt-4 md:text-left">
                  We are currently offering Access through an extension, you
                  will have to download our extension and install it in chrome.
                  An access guide has been provided in Member Dashboard
                </p>
              </div>
              <div class="w-full md:w-3/4">
                <h1 class="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  Can I Use My Tool On Office As Well?
                </h1>
                <p class="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  We are currently offering Access through an extension, you
                  will have to download our extension and install it in chrome.
                  An access guide has been provided in Member Dashboard
                </p>
              </div>
              <div class="w-full md:w-3/4">
                <h1 class="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  How Would I Get Access?
                </h1>
                <p class="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  We are proud to say that our live chat support replies Quickly
                  & Available the Whole day to assist our Users. We also Offer
                  Anydesk support to Our Users.
                </p>
              </div>
            </div>
          </div>
          <div id="faq-1" class="w-full md:w-1/2">
            <div class="flex items-center justify-center flex-col">
              <div class="w-full md:w-3/4">
                <h1 class="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  Do Your Offer Refunds?
                </h1>
                <p class="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  Not at All, We only & Only Refund if our tools don’t work or
                  more than 24 Hours. Make sure to clear anything from the Live
                  Chat Support Before Buying Anything. Read our Refund Policy
                  For More Info.
                </p>
              </div>
              <div class="w-full md:w-3/4">
                <h1 class="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  Can I Share My Account?
                </h1>
                <p class="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  No, We don’t allow account sharing. Single Account for single
                  user. If you shared your account with someone, Our system will
                  autoblock your Account.
                </p>
              </div>
              <div class="w-full md:w-3/4">
                <h1 class="text-2xl font-normal flex items-center justify-center mt-20 mx-auto text-center md:text-left">
                  Can I Expect A Good Support?
                </h1>
                <p class="w-full flex items-center justify-center mx-auto text-center px-10 mt-4 md:text-left">
                  No, We don’t allow account sharing. Single Account for single
                  user. If you shared your account with someone, Our system will
                  autoblock your Account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 py-10" id="seller">
        <h1 class="text-4xl font-extrabold text-gray-700 tracking-normal text-center mb-10">
          Best Sellers
        </h1>
        <div class="max-w-7xl mx-auto bg-white px-10 md:px-20 py-16 flex flex-wrap justify-center">
          <div
            id="sellers-1"
            class="border mb-10 md:mx-6 md:w-1/3 lg:w-1/5 md:flex-grow-0 md:flex-shrink-0 overflow-hidden"
          >
            <img
              src="https://static.wixstatic.com/media/d4d6f6_f43e7757c6184093b309914a58b66270~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_f43e7757c6184093b309914a58b66270~mv2.png"
              alt="logo"
              class="w-full h-auto md:h-60 object-contain"
            />
            <h1 class="my-4 font-bold tracking-widest text-center">
              Silver Plan
            </h1>
            <div class="flex justify-center items-center mb-4">
              <pre class="text-2xl md:text-4xl">$</pre>
              <h1 class="text-6xl md:text-7xl font-bold md:ml-2">10</h1>
            </div>
            <h1 class="text-center">Every Month</h1>
            <h1 class="py-5 text-center text-gray-600 text-sm md:text-base">
              All Basic SEO tools
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              Valid until canceled
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              one day free trial
            </h1>
            <button class="border-2 border-purple-600 bg-purple-600 text-white tracking-widest mt-6 mb-5 py-1 px-10 md:px-12 block mx-auto">
              Select
            </button>
            <h1 class="border-t-2 pt-6 font-light text-center text-gray-600 text-sm md:text-base">
              UberSuggest
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Grammerly
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Sem Rush
            </h1>
          </div>
          <div
            id="sellers-2"
            class="border mb-10 md:mx-6 md:w-1/3 lg:w-1/5 md:flex-grow-0 md:flex-shrink-0 overflow-hidden"
          >
            <img
              src="https://static.wixstatic.com/media/d4d6f6_9ccb4242e5564583b3d04328623d5788~mv2.png/v1/fill/w_296,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_9ccb4242e5564583b3d04328623d5788~mv2.png"
              alt="logo"
              class="w-full h-auto md:h-60 object-contain"
            />
            <h1 class="my-4 font-bold tracking-widest text-center">
              Gold Plan
            </h1>
            <div class="flex justify-center items-center mb-4">
              <pre class="text-2xl md:text-4xl">$</pre>
              <h1 class="text-6xl md:text-7xl font-bold md:ml-2">15</h1>
            </div>
            <h1 class="text-center">Every Month</h1>
            <h1 class="pt-5 text-center text-gray-600 text-sm md:text-base">
              Everything in Silver Plan
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              {' '}
              + More
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              Valid until canceled
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              one day free trail{' '}
            </h1>
            <button class="border-2 border-purple-600 bg-purple-600 text-white tracking-widest mt-6 mb-5 py-1 px-10 md:px-12 block mx-auto">
              Select
            </button>
            <h1 class="border-t-2 pt-6 font-light text-center text-gray-600 text-sm md:text-base">
              Everything in silver plan
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Majestic
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Moz Pro
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Buzzsumo
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Spyfu
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Woorank
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Spamzilla
            </h1>
          </div>
          <div
            id="sellers-2"
            class="border mb-10 md:mx-6 md:w-1/3 lg:w-1/5 md:flex-grow-0 md:flex-shrink-0 overflow-hidden"
          >
            <img
              src="https://static.wixstatic.com/media/d4d6f6_fbdd4ecd85934ac78b377a1177d0dcf5~mv2.png/v1/fill/w_289,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_fbdd4ecd85934ac78b377a1177d0dcf5~mv2.png"
              alt="logo"
              class="w-full h-auto md:h-60 object-contain"
            />
            <h1 class="my-4 font-bold tracking-widest text-center">
              Gold Plan
            </h1>
            <div class="flex justify-center items-center mb-4">
              <pre class="text-2xl md:text-4xl">$</pre>
              <h1 class="text-6xl md:text-7xl font-bold md:ml-2">29</h1>
            </div>
            <h1 class="text-center">Every Month</h1>
            <h1 class="pt-5 text-center text-gray-600 text-sm md:text-base">
              Everything in Gold Plan
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              {' '}
              + More
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              Valid until canceled
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              one day free trail{' '}
            </h1>
            <button class="border-2 border-purple-600 bg-purple-600 text-white tracking-widest mt-6 mb-5 py-1 px-10 md:px-12 block mx-auto">
              Select
            </button>
            <h1 class="border-t-2 pt-6 font-light text-center text-gray-600 text-sm md:text-base">
              Everything in silver plan
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Storyblocks
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Helium 10
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Jungle Scout
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Canva Pro
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Pickmonkey
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Crello
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Indexification
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Instatext
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Quilbot
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Envato Elements
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Kwfinder
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Rytr.ai
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Spotify
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Ahref
            </h1>
          </div>
          <div
            id="sellers-2"
            class="border mb-10 md:mx-6 md:w-1/3 lg:w-1/5 md:flex-grow-0 md:flex-shrink-0 overflow-hidden"
          >
            <img
              src="https://static.wixstatic.com/media/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png/v1/fill/w_280,h_200,fp_0.23_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d4d6f6_452f48217b5d47209da24d0bda7a6aac~mv2.png"
              alt="logo"
              class="w-full h-auto md:h-60 object-contain"
            />
            <h1 class="my-4 font-bold tracking-widest text-center">
              Gold Plan
            </h1>
            <div class="flex justify-center items-center mb-4">
              <pre class="text-2xl md:text-4xl">$</pre>
              <h1 class="text-6xl md:text-7xl font-bold md:ml-2">29</h1>
            </div>
            <h1 class="text-center">Every Month</h1>
            <h1 class="pt-5 text-center text-gray-600 text-sm md:text-base">
              Everything in Gold Plan
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              {' '}
              + More
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              Valid until canceled
            </h1>
            <h1 class="text-center text-gray-600 text-sm md:text-base">
              one day free trail{' '}
            </h1>
            <button class="border-2 border-purple-600 bg-purple-600 text-white tracking-widest mt-6 mb-5 py-1 px-10 md:px-12 block mx-auto">
              Select
            </button>
            <h1 class="border-t-2 pt-6 font-light text-center text-gray-600 text-sm md:text-base">
              Everything in silver plan
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Storyblocks
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Helium 10
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Jungle Scout
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Canva Pro
            </h1>
            <h1 class="pt-4 font-light text-center text-gray-600 text-sm md:text-base">
              Pickmonkey
            </h1>
          </div>
        </div>
      </div>

      <div id="individual" className="bg-[#f9f3ff]">
        <h1 className="flex items-center justify-center py-20 text-4xl font-bold">
          Individual Plan
        </h1>
        <div className="bg-white px-4 py-20 md:p-20 max-w-7xl mx-auto flex flex-wrap justify-center">
          <div
            id="individual-1"
            className="flex items-center justify-center mb-8 md:mb-0 md:w-1/4"
          >
            <div className="border h-[600px] w-60 flex flex-col items-center overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/d4d6f6_9ab7c271931f470794f99d26e00d5d84~mv2.webp"
                alt="logo"
              />
              <h1 className="my-4 font-bold tracking-widest">Veed.io</h1>
              <div className="flex">
                <pre>$</pre>
                <h1 className="text-6xl">10</h1>
              </div>
              <h1>Every Month</h1>
              <h1 className="font-light">Valid until canceled</h1>
              <h1 className="font-light">1 day free trail</h1>
              <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
                Select
              </button>
              <h1 className="border-t-2 px-12 py-6 font-light">Veed.io</h1>
            </div>
          </div>
          <div
            id="individual-2"
            className="flex items-center justify-center mb-8 md:mb-0 md:w-1/4"
          >
            <div className="border h-[600px] w-60 flex flex-col items-center overflow-hidden">
              <img
                className=" mt-1"
                src="https://static.wixstatic.com/media/d4d6f6_418267f6aa9c499192ab25919d3af73c~mv2.jpeg/v1/fill/w_296,h_200,fp_0.23_0.50,lg_1,q_80,enc_auto/d4d6f6_418267f6aa9c499192ab25919d3af73c~mv2.jpeg"
                alt="logo"
              />
              <h1 className="my-4 font-bold tracking-widest">Semrush Trend</h1>
              <div className="flex">
                <pre>$</pre>
                <h1 className="text-6xl">15</h1>
              </div>
              <h1>Every Month</h1>
              <h1 className="font-light">Valid until canceled</h1>
              <h1 className="font-light">1 day free trail</h1>
              <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
                Select
              </button>
              <h1 className="border-t-2 px-12 py-6 font-light">
                Semrush Trend
              </h1>
            </div>
          </div>
          <div
            id="individual-2"
            className="flex items-center justify-center mb-8 md:mb-0 md:w-1/4"
          >
            <div className="border h-[600px] w-60 flex flex-col items-center overflow-hidden">
              <img
                className=" mt-1"
                src="https://static.wixstatic.com/media/d4d6f6_29e3cde9d89548ef82e09ec40219579b~mv2.png/v1/fill/w_289,h_200,fp_0.23_0.50,lg_1,q_85,enc_auto/d4d6f6_29e3cde9d89548ef82e09ec40219579b~mv2.png"
                alt="logo"
              />
              <h1 className="my-4 font-bold tracking-widest">Vistacreate</h1>
              <div className="flex">
                <pre>$</pre>
                <h1 className="text-6xl">10</h1>
              </div>
              <h1>Every Month</h1>
              <h1 className="font-light">Valid until canceled</h1>
              <h1 className="font-light">1 day free trail</h1>
              <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
                Select
              </button>
              <h1 className="border-t-2 px-12 py-6 font-light">Vistacreate</h1>
            </div>
          </div>
          <div
            id="individual-3"
            className="flex items-center justify-center mb-8 md:mb-0 md:w-1/4"
          >
            <div className="border h-[600px] w-60 flex flex-col items-center overflow-hidden">
              <img
                className=" mt-1"
                src="https://static.wixstatic.com/media/d4d6f6_a0591139935f48458ae13333baf6a399~mv2.jpg/v1/fill/w_280,h_200,fp_0.23_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/d4d6f6_a0591139935f48458ae13333baf6a399~mv2.jpg"
                alt="logo"
              />
              <h1 className="my-4 font-bold tracking-widest">SpyFu</h1>
              <div className="flex">
                <pre>$</pre>
                <h1 className="text-6xl">5</h1>
              </div>
              <h1>Every Month</h1>
              <h1 className="font-light">Valid until canceled</h1>
              <h1 className="font-light">1 day free trail</h1>
              <button className="border px-12 mt-6 mb-5 py-1 bg-[#9e3ffd] text-white tracking-widest">
                Select
              </button>
              <h1 className="border-t-2 px-12 py-6 font-light">SpyFu</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        class="flex flex-col lg:flex-row items-center justify-between"
      >
        <div id="contact-1" class=" lg:w-1/2 lg:h-auto py-10 lg:pl-36">
          <h1 class="text-[#9e3ffd] text-center lg:text-left tracking-widest">
            Contact
          </h1>
          <h1 class="text-3xl py-4 font-bold text-center lg:text-left">
            Drop your queries
          </h1>
          <div class="flex flex-col lg:flex-row py-1 text-center lg:text-left">
            <h1 class="font-bold">140E Hartsdale Avenue New York </h1>
            <h1 class="font-bold ml-0 lg:ml-4">United States</h1>
          </div>
          <h1 class="font-bold py-1 text-center lg:text-left">
            seoexpressed@gmail.com
          </h1>
          <div class="flex justify-center lg:justify-start">
            <i class="mx-4 cursor-pointer font-medium py-4 lg:py-12 text-2xl fa-brands fa-instagram"></i>
            <i class="mx-4 cursor-pointer font-medium py-4 lg:py-12 text-2xl fa-brands fa-linkedin-in"></i>
            <i class="mx-4 cursor-pointer font-medium py-4 lg:py-12 text-2xl fa-brands fa-facebook-f"></i>
            <i class="mx-4 cursor-pointer font-medium py-4 lg:py-12 text-2xl fa-brands fa-twitter"></i>
          </div>
        </div>
        <div id="contact-2" class=" lg:w-1/2 lg:h-auto py-10">
          <form class="flex flex-col justify-center h-full">
            <div class="flex flex-col lg:flex-row mx-10 mb-6">
              <div class="flex-1">
                <label for="first-name">First Name</label> -{' '}
                <input
                  id="first-name"
                  class="mt-2 border-b-2 w-full lg:w-auto px-4 py-2"
                  type="text"
                />
              </div>
              <div class="flex-1 lg:ml-6 mt-4 lg:mt-0">
                <label for="last-name">Last Name</label> -{' '}
                <input
                  id="last-name"
                  class="mt-2 border-b-2 w-full lg:w-auto px-4 py-2"
                  type="text"
                />
              </div>
            </div>
            <div class="mx-10 mb-6">
              <label for="email">Email</label> -{' '}
              <input
                id="email"
                class="mt-2 border-b-2 w-full lg:w-96 px-4 py-2"
                type="text"
              />
            </div>
            <div class="mx-10 mb-6">
              <label for="message">Leave us a message...</label> .{' '}
              <textarea
                id="message"
                class="mt-2 border-b-2 w-full lg:w-96 px-4"
                rows="4"
              ></textarea>
            </div>
            <button class="mx-12 border py-3 px-4 bg-[#9e3ffd] text-white font-extralight text-[18px] rounded-3xl">
              Contact Now
            </button>
          </form>
        </div>
      </div>

      <div class="w-full">
        <div class="aspect-w-16 h-80 aspect-h-9">
          <iframe
            title="abc"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.00050837269!2d77.19260042525525!3d28.61476542969911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99ba1e313%3A0x7ed0da6bc307aa30!2sRashtrapati%20Bhawan%2C%20President&#39;s%20Estate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1680488467865!5m2!1sen!2sin"
            class="w-full h-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Home

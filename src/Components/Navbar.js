import React, { useState } from 'react'
import Model from 'react-modal'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [isopenModel, setIsopenModel] = useState(false)
  return (
    <>
      <nav className=" w-screen bg-white md:block xl:block hidden">
        <div className=" flex items-center justify-between mx-6">
          <div>
            <Link to="/"><img src="/images/Screenshot.webp" alt="logo" /></Link>
          </div>
          <div>
            <ul className=" flex">
              <NavLink
                to="/"
                activeClassName="active"  className=" mx-2 font-semibold text-[18px] cursor-pointer hover:text-[#9e3ffd]"
              >
                Home
              </NavLink>
              <NavLink
                to="/plans"
                activeClassName="active" className=" mx-2 font-semibold text-[18px] cursor-pointer hover:text-[#9e3ffd]"
              >
                Plans & Pricing
              </NavLink>
              <NavLink
                to="/blog"
                activeClassName="active" className=" mx-2 font-semibold text-[18px] cursor-pointer hover:text-[#9e3ffd]"
              >
                Blog
              </NavLink>
            </ul>
          </div>
          <div>
            <button
              onClick={() => setIsopenModel(true)}
              className=" mx-4 py-3 px-4 z-20"
            >
              <i class="fa-solid fa-user mr- bg-blue-600 text-white rounded-full text-[16px] p-[8px]"></i>{' '}
              Log IN
            </button>
            <Model
              isOpen={isopenModel}
              onRequestClose={() => setIsopenModel(false)}
              style={{
                overlay: {
                  background: 'gray',
                  zIndex: '21',
                },
                content: {
                  color: 'orang',
                },
              }}
            >
              <h1 className=" text-6xl flex items-center justify-center font-extrabold">
                Sign Up
              </h1>
              <h1 className=" font-bold flex items-center justify-center py-8">
                Already a member?{' '}
                <span className=" text-[18px] text-[#9e3ffd]">Log In</span>{' '}
              </h1>
              <div className=" mx-auto items-center justify-center flex my-6 flex-col ">
                <img className="" src="" alt="" />
                <button
                  className="  flex items-center justify-center px-20 border my-4 py-2 bg-[#4e69a2]  text-white"
                  onClick={() => setIsopenModel(false)}
                >
                  {' '}
                  <i class=" px-6 text-4xl fa-brands fa-facebook"></i> Sign up
                  With Facebook
                </button>
                <button
                  className="  flex items-center justify-center px-20 border my-4 py-2  bg-[#5591f5] text-white "
                  onClick={() => setIsopenModel(false)}
                >
                  {' '}
                  <i class=" px-6 text-4xl fa-brands fa-google"></i> Sign up
                  With Google
                </button>
              </div>
              <div className=" flex items-center justify-center">
                <h1 className=" border-b w-44 flex items-center justify-center mx-4">
                  <br />
                </h1>
                <span className=" flex items-center justify-center">or</span>
                <h1 className=" border-b w-44 flex items-center justify-center mx-4">
                  <br />
                </h1>
              </div>
              <button className=" flex items-center justify-center mx-auto mt-7 border px-24 border-black text-2xl py-2">
                {' '}
                Sign up with email
              </button>
              <p className=" flex items-center justify-center mt-10">
                Sign up to this site with a public profile.{' '}
                <span className=" underline ml-2"> Read more </span>
              </p>
              <button
                className=" mx-auto items-center justify-center flex border px-2 py-2 mt-4 border-black font-medium "
                onClick={() => setIsopenModel(false)}
              >
                Close Model
              </button>
            </Model>
            <button className=" border py-3 px-4 bg-blue-700 text-white font-extralight text-[18px] rounded-3xl">
              <a href="https://mail.google.com">Contact Now</a>
            </button>
          </div>
        </div>
      </nav>

      <nav className="w-screen h-full bg-white sm:block md:hidden lg:hidden xl:hidden">
        <div className="flex h-full justify-between mx-16">
          <div>
            <Link to="/"><img onClick={() => setShow(!show)} src="/images/Screenshot.webp" alt="logo" /></Link>
            <div className={show ? 'hidden' : 'block'}>
              <ul className="flex justify-center font-bold flex-col">
                <Link onClick={() => setShow(!show)} to="/" className=" mt-10 cursor-pointer">Home</Link>
                <Link onClick={() => setShow(!show)} to="/plans" className=" mt-10 cursor-pointer">Plans & Pricing</Link>
                <Link onClick={() => setShow(!show)} to="/blog" className=" mt-10 cursor-pointer">Blog</Link>
              </ul>
              <div className=" flex items-center justify-between mt-52">
                <button 
                  onClick={() => setIsopenModel(true)}
                  className=" bottom-0 left-0 right-0 p-4 text-white bg-blue-500 hover:bg-blue-600"
                >
                  Log In
                </button>
                <Model
                  isOpen={isopenModel}
                  onRequestClose={() => setIsopenModel(false)}
                  style={{
                    overlay: {
                      background: 'gray',
                      zIndex: '21',
                    },
                    content: {
                      color: 'orang',
                    },
                  }}
                >
                  <h1 className=" text-6xl flex items-center justify-center font-extrabold">
                    Sign Up
                  </h1>
                  <h1 className=" font-bold flex items-center justify-center py-8">
                    Already a member?{' '}
                    <span className=" text-[18px] text-[#9e3ffd] cursor-pointer">Log In</span>{' '}
                  </h1>
                  <div className=" mx-auto items-center justify-center flex my-6 flex-col ">
                    <img className="" src="" alt="" />
                    <button
                      className="  flex items-center justify-center px-10 border my-4 py-2 bg-[#4e69a2]  text-white"
                      onClick={() => setIsopenModel(false)}
                    >
                      {' '}
                      <i class=" px-6 text-4xl fa-brands fa-facebook"></i> Sign
                      up With Facebook
                    </button>
                    <button
                      className="  flex items-center justify-center px-10 border my-4 py-2  bg-[#5591f5] text-white "
                      onClick={() => setIsopenModel(false)}
                    >
                      {' '}
                      <i class=" px-6 text-4xl fa-brands fa-google"></i> Sign up
                      With Google
                    </button>
                  </div>
                  <div className=" flex items-center justify-center">
                    <h1 className=" border-b w-44 flex items-center justify-center mx-4">
                      <br />
                    </h1>
                    <span className=" flex items-center justify-center">
                      or
                    </span>
                    <h1 className=" border-b w-44 flex items-center justify-center mx-4">
                      <br />
                    </h1>
                  </div>
                  <button className=" flex items-center justify-center mx-auto mt-7 border px-14 border-black text-2xl py-2">
                    {' '}
                    Sign up with email
                  </button>
                  <p className=" flex items-center justify-center mt-10">
                    Sign up with a public profile.{' '}
                    <span className=" underline ml-2 cursor-pointer"> Read more </span>
                  </p>
                  <button
                    className=" mx-auto items-center justify-center flex border px-2 py-2 mt-4 border-black font-medium "
                    onClick={() => setIsopenModel(false)}
                  >
                    Close Model
                  </button>
                </Model>
                <button onClick={() => setShow(!show)} className=" bottom-0 left-0 right-0 p-4 text-white bg-blue-500 hover:bg-blue-600">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
          <div
            className=" mt-8 text-2xl cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <i class="fa-solid fa-bars"></i>
            ) : (
              <i class="fa-solid fa-xmark"></i>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

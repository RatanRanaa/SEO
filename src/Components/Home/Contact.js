import React from 'react'

const Contact = () => {
  return (
    <div className=' flex items-center justify-between w-screen'>
      <div className=' border w-[100%] h-[600px] pl-36 pt-24'>
        <h1 className=' text-[#9e3ffd] tracking-widest'>Contact</h1>
        <h1 className=' text-3xl py-4 font-bold'>Drop your queries</h1>
        <h1 className=' py-1 font-light'>140E Hartsdale Avenue New York </h1>
        <h1 className=' py-1 font-light'>United States</h1>
        <h1 className=' py-1 font-light'>seoexpressed@gmail.com</h1>
        <div>
        <i class=" px-4 font-bold py-12 fa-brands fa-instagram"></i>
        <i class=" px-4 font-bold py-12 fa-brands fa-linkedin-in"></i>
        <i class=" px-4 font-bold py-12 fa-brands fa-facebook-f"></i>
        <i class=" px-4 font-bold py-12 fa-brands fa-twitter"></i>
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
  )
}

export default Contact

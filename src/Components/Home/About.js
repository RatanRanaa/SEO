import React from 'react'

const About = () => {
  return (
    <>
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
                <h1 className=" mt-5 font-normal">
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
              <img src="./images/About.jpeg" alt="logo" width={800} />
            </div>
          </div>
        </div>
        <div className=' w-screen h-[500px] bg-[#9e3ffd] mt-28'>
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
    </>
  )
}

export default About

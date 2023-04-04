import React from 'react'

const Blog = () => {
  return (
    <div className=' '>
      <div>
        <h1 className=' ml-60 mt-20'>All Posts</h1>
      </div>
      <div>
        <div className=" container mt-10 mx-60">
          <div className=" grid  grid-cols-3">
            <div className=' border'>
                <img className=' h-full' src="https://static.wixstatic.com/media/nsplsh_197bdb827dd74f9585db55f630f4925d~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/nsplsh_197bdb827dd74f9585db55f630f4925d~mv2.jpg" alt="logo" width={500} />
            </div>
            <div className=' border pl-14'>
                {/* <img src="" alt="" /> */}
                
                <h1 className=' font-light'> Prabhanjay Tiwari <i class="fa-solid fa-graduation-cap"></i></h1>
                <h1 className=' font-light'>Mar 25 . 3Min</h1>
                <h1 className=' font-bold text-3xl leading-relaxed'>
                    <a href="a">How SEO Expressed will help you to be more creative in your online journey ?</a><br />
                </h1>
                <h1 className=' pt-5 font-normal leading-relaxed border-b-2 pb-5 tracking-tight'>
                <a href="a">SEO Expressed is a group buy website that provides access to a wide range of SEO tools and other creative software ata an affardable</a>
                </h1>
                <div>
                    <h1 className=' font-light mt-4'>3Views <span className=' ml-6'>0 comments</span> </h1>
                </div>
            </div>
          </div>
        </div>
        <div className=" container mt-10 mx-60">
          <div className=" grid  grid-cols-3">
            <div className=' border'>
                <img className=' h-full' src="https://static.wixstatic.com/media/nsplsh_e7d94f27b63f4ff7acbe5d66b85f4fe5~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/nsplsh_e7d94f27b63f4ff7acbe5d66b85f4fe5~mv2.jpg" alt="logo" width={500} />
            </div>
            <div className=' border pl-14'>
                {/* <img src="" alt="" /> */}
                
                <h1 className=' font-light'> Prabhanjay Tiwari <i class="fa-solid fa-graduation-cap"></i></h1>
                <h1 className=' font-light'>Mar 25 . 3Min</h1>
                <h1 className=' font-bold text-3xl leading-relaxed'>
                    <a href="a">How SEO Expressed will help you to be more creative in your online journey ?</a><br />
                </h1>
                <h1 className=' pt-5 font-normal leading-relaxed border-b-2 pb-5 tracking-tight'>
                <a href="a">SEO Expressed is a group buy website that provides access to a wide range of SEO tools and other creative software ata an affardable</a>
                </h1>
                <div>
                    <h1 className=' font-light mt-4'>3Views <span className=' ml-6'>0 comments</span> </h1>
                </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=' flex items-center justify-center mt-10 pb-2'>© 2023 by SEO Expressed. Powered and secured by SEO Expressed Team.</h1>
    </div>
  )
}

export default Blog

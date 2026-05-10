import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewLetterBox from '../components/NewLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
       <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, culpa quibusdam odit sequi nulla vitae minus ut eum consequuntur dolore! Ut tenetur iure aperiam mollitia non ducimus consequuntur voluptates maiores?
          Nam sed illum consequuntur ex corrupti accusantium exercitationem enim, adipisci porro placeat quo at voluptas architecto ipsam aut laboriosam, repellendus ipsa saepe cupiditate. Provident tenetur aut cupiditate, quae fuga quas.
          In atque blanditiis perspiciatis repellendus, maiores commodi quos excepturi natus laboriosam doloremque ratione recusandae ut cumque aliquid. Neque quisquam dolore saepe repellendus deleniti! At mollitia commodi ipsum unde voluptates praesentium.</p>          
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, culpa quibusdam odit sequi nulla vitae minus ut eum consequuntur dolore! Ut tenetur iure aperiam mollitia non ducimus consequuntur voluptates maiores?
          Nam sed illum consequuntur ex corrupti accusantium exercitationem enim, adipisci porro placeat quo at voluptas architecto ipsam aut laboriosam, repellendus ipsa saepe cupiditate. Provident tenetur aut cupiditate, quae fuga quas.
          In atque blanditiis perspiciatis repellendus, maiores commodi quos excepturi natus laboriosam doloremque ratione recusandae ut cumque aliquid. Neque quisquam dolore saepe repellendus deleniti! At mollitia commodi ipsum unde voluptates praesentium.</p>  
          <b className='text-gray-800'>Our MIssion</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempora vel, nisi ipsum possimus cumque?</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
       < Title text1={"WHY"} text2={"CHOOSE US"}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance :</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum doloribus accusamus culpa, tenetur fuga similique.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convenience :</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum doloribus accusamus culpa, tenetur fuga similique.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Exceptional Customer Service :</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum doloribus accusamus culpa, tenetur fuga similique.</p>
         </div>
      </div>

   <NewLetterBox/>
    </div>
  )
}

export default About
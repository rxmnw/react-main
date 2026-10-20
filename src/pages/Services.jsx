import React from 'react'
import Card from '../Card'
import Footer from '../Footer'

const Services = () => {
  return (
    <div className='max-w-[1200px] m-auto'>
        <div className='flex justify-around bg-[#141414] p-[20px] rounded-xl mt-[75px]'>
       <div className='w-[600px] bg-[#141414] flex flex-col gap-[20px]'>
         <h1 className='text-[30px] bg-[#141414] font-bold'>Our Comprehensive <span className='bg-[#141414] text-[#0A84FF]'>Digital Solutions</span></h1>
        <p className='text-[#FFFFFFE5] bg-[#141414]'>At Catalyst Analytics, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence.</p>
      </div>
      <img className='w-[300px] bg-[#141414]' src="/Screenshot_85 (2).png" alt="" />
      </div>




<div className='flex flex-col gap-[40px] items-center mt-[100px]'>
  <h1 className='text-[30px] font-bold'>Our Services</h1>
  <p className='w-[700px] text-center'>Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine learning and data engineering</p>

 <div className='flex gap-[50px]'> 
<Card img = '/72355892508 1 (1).png' h1 = 'Machine Learning Solutions' p='Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.' textDot = 'Deep learning model development' textDot2 ='Computer vision solutions' textDot3='Model optimization and scaling'  textDot4 ='Neural network architecture design' textDot5 = 'Natural language processing '/>
<Card img = '/72355892508 1 (1d).png' h1 = 'Blockchain Development' p='End-to-end blockchain solutions from smart contract development to decentralized application architecture and application.' textDot = 'Smart contract development and model' textDot2 ='Blockchain integration and application' textDot3='Token implementation with template'  textDot4 ='DeFi protocol design' textDot5 = 'Web3 development'/>
</div>


 <div className='flex gap-[50px]'> 
<Card img = '/72355892508 1 (1)w.png' h1 = 'Machine Learning Solutions' p='Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.' textDot = 'Deep learning model development' textDot2 ='Computer vision solutions' textDot3='Model optimization and scaling'  textDot4 ='Neural network architecture design' textDot5 = 'Natural language processing '/>
<Card img = '/72355892508 1 (1)x.png' h1 = 'Blockchain Development' p='End-to-end blockchain solutions from smart contract development to decentralized application architecture and application.' textDot = 'Smart contract development and model' textDot2 ='Blockchain integration and application' textDot3='Token implementation with template'  textDot4 ='DeFi protocol design' textDot5 = 'Web3 development'/>
</div>


 <div className='flex gap-[50px]'> 
<Card img = '/72355892508 1 (1)y.png' h1 = 'Machine Learning Solutions' p='Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.' textDot = 'Deep learning model development' textDot2 ='Computer vision solutions' textDot3='Model optimization and scaling'  textDot4 ='Neural network architecture design' textDot5 = 'Natural language processing '/>
<Card img = '/72355892508 1 (1)z.png' h1 = 'Blockchain Development' p='End-to-end blockchain solutions from smart contract development to decentralized application architecture and application.' textDot = 'Smart contract development and model' textDot2 ='Blockchain integration and application' textDot3='Token implementation with template'  textDot4 ='DeFi protocol design' textDot5 = 'Web3 development'/>
</div>

</div>






<Footer/>


    </div>
  )
}

export default Services
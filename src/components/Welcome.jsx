import fondo from '/assets/images/Background.png'
import love from '/assets/images/mingalove.png'

import {Link as Anchor} from 'react-router-dom'


export default function Welcome() {
  return (
    <main className='flex  flex-col items-center justify-center overflow-x-hidden  h-screen '>
      <img className=' flex w-[100%] h-screen  object-cover object-center  lg:h=[50vh] ' src={fondo} alt='background'></img>
      <div className=" flex flex-col  w-[90%] absolute justify-center items-center  lg:items-start lg:justify-center  text-center text-white  lg:mt-10">
        <h1 className=' ml-4 mr-4 lg:ml-0 font-Poppins  text-4xl mb-3  font-bold lg:text-[64px] lg:font-bolder  '>For the love of manga</h1>
        <h5 className='lg:pb-5 font-poppins text-lg lg:text-[35px] mb-3 lg:pb-2 '>Explore our varieties</h5>
        <img className='h-[60px] w-[180px] hidden lg:flex pb-6 lg:pb-4  ' src={love} alt='mingalove'></img>
        <Anchor  to='/signin' className=' w-[94%] md:w-[80%] lg:w-40 rounded-lg  h-[64px]  items-center justify-center  pt-2 pb-3 rounded-md  bg-white text-orange text-2xl font-bold   '>Sign In!</Anchor>


      </div>
      
    </main>

  )
}


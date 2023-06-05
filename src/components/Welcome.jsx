import fondo from '/assets/images/Background.png'
import love from '/assets/images/mingalove.png'

export default function Welcome() {
  return (
    <div >
      <img className='  w-screen  h-screen  object-cover object-center  ' src={fondo} alt='background'></img>
      <div className=" flex flex-col inset-y-1/2 absolute justify-center items-center  lg:items-start  lg:ml-20 text-center text-white  md:ml-[15%]">
        <h1 className=' ml-4 mr-4 lg:ml-0 font-poppins  text-4xl mb-3  font-bold lg:text-[64px] lg:font-bolder tracking-[-.075em] lg: tracking-[0em]  '>For the love of manga</h1>
        <h5 className='lg:pb-5 font-poppins text-lg lg:text-[35px] mb-3 lg:pb-2 '>Explore our varieties</h5>
        <img className='h-[60px] w-[180px] hidden lg:flex pb-6 lg:pb-4  ' src={love} alt='mingalove'></img>
        <button className=' w-[240px] h-auto bg-white text-orange text-[34px] font-bold hidden lg:block rounded-md gap-[10px]'>Sign In!</button>
        <button className='  h-[59px] w-[96%]  items-center justify-center  pt-2 pb-3 rounded-md  bg-white text-orange text-2xl font-bold block lg:hidden   '>Let´s go!</button>
      </div>

    </div>

  )
}

import adelante from '/assets/images/adelante.png'
import atras from '/assets/images/atras.png'

export default function Carousel({character_photo, cover_photo,name,description}) {
  return (
    <main className='flex justify-between flex-wrap hidden lg:block  '>
        <div className='h-[265px] bg-orange rounded-md flex items-center relative ml-10 mr-10 mt-[50px]'>
          <img className=' ml-10 h-[280px] w-[250px] absolute' src={character_photo} alt='imagen1'></img>
          <img className=' ml-[27%] -mt-[60px] h-[274px] w-[169px] absolute' src={cover_photo} alt='imagen2'></img>
          <img className=' ml-2 h-10 absolute' src={atras} alt='previously'></img>
          <img className=' ml-[95%] mr-2  h-10 absolute' src={adelante} alt='next'></img>
          <div className='flex flex-col w-[43%] h-[55%] text-white absolute mr-5 ml-[49%] -mt-[3%]'>
            <h3 className='  font-bold text-2xl '>{name}</h3>
            <p className=' text-[20px] font-roboto text-sm font-normal mt-3'>{description}</p>
          </div>
        </div>
      </main>
  )
}

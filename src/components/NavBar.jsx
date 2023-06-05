import logokanji from '/assets/images/kanji.png'
import logo from '/assets/images/Minga.png'
import menu from '/assets/images/menu.png'


export default function NavBar() {
  return (
    <nav className='flex flex-col lg:items-start items-center relative'>
       
        <div className='flex h-full w-full justify-between absolute'>
          <img className='w-17 h-16 mt-6 lg:mt-8 ml-2 lg:ml-10' src={menu} alt='menu'></img>
          <div className='flex justify-end'>
            <img className=' w-[150px] h-[50px] mt-10 mr-2 hidden lg:flex ' src={logo} alt='logo'></img>
            <img className=' w-[50px]  h-[45px] mt-10 mr-4 lg:mr-10  ' src={logokanji} alt='logo2'></img>
          </div>
        </div>
      </nav>
  )
}

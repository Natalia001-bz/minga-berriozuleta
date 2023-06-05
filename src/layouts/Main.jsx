import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Welcome from "../components/Welcome"


export default function Main({children}) {
    
  return (
    <>
    <NavBar/>
    <Welcome/>
{children}
<Footer/>
    </>
  )
}

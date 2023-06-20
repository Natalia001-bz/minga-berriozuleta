import {  useState } from "react"
import Carousel from "../components/Carousel"
import Welcome from "../components/Welcome"
import SignIn from "./SignIn"
import { useParams } from "react-router-dom"


export default function Index({}) {
  const {manga_id, ch_id, author_id} = useParams()
  console.log(manga_id)
  console.log(ch_id)
  console.log(author_id)

  const [changeView, setChangeView] = useState(false)

  return (
    changeView ? (
      <>
<SignIn changeView={changeView} setChangeView={setChangeView} />

</>
   ): ( 
    
<>

<Welcome  changeView={changeView} setChangeView={setChangeView}/>
 <Carousel />

 </>
))}

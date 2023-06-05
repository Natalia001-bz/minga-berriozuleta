import Carousel from "../components/Carousel"

export default function Index({data}) {
    console.log(data)
  return (
    <Carousel character_photo ={data[0].character_photo} cover_photo={data[0].cover_photo} name={data[0].name} description={data[0].description}/>
  )
}

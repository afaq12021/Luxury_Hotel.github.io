import React from "react";
import Header from "./components/header";
import image1 from "./assets/rooms.jpg"
import image2 from "./assets/r1.jpeg"
import image3 from "./assets/r2.jpeg"
import Test from "./components/Test";
import Footer from "./components/Footer";

const Rooms=()=>{

  const data=[
    {
      img:image2,
      title:"SINGLE ROOM",
      icontitle:"VIEW ROOMS DETAIL",
      buttontitle:"$147 Avg/night"
    },
    {
      img:image1,
      title:"DOUBLE ROOM",
      icontitle:"VIEW ROOMS DETAIL",
      buttontitle:"$147 Avg/night"
    },
    {
      img:image3,
      title:"TWIN ROOM",
      icontitle:"VIEW ROOMS DETAIL",
      buttontitle:"$147 Avg/night"
    },
  ]
  return(
    <>
    <Header image={image1}/>

    <div className="w-[70%] mx-auto mt-6 my-6 ">
<div className="flex justify-center items-center">
        <p className="sm:font-semibold sm:text-5xl text-3xl font-serif text-blue-950">ROOMS AND RATES</p>
        </div>
        <p className="sm:text-lg text-base text-blue-950">We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
and our modern luxury resort facilities will help you enjoy the best of all. </p>
      </div>

{
      data.map(({img,title,icontitle,buttontitle})=>{
        return(
          <>

          <div className="w-[1200px] h-[800px]  mx-auto flex flex-col border border-blue-900  mb-20">
      <div className="w-full h-[70%]"  style={{backgroundImage:`url(${img})`,backgroundSize:"cover", backgroundPosition:"center",backgroundRepeat:"no-repeat", }}>
      </div>
      <div className="w-full h-[15%] bg-blue-950 flex justify-center items-center">
      <p className="text-4xl font-bold text-white">{title}</p>
      </div>

      <div className="w-full h-[20%] flex flex-row justify-around items-center">
      <div className=" flex items-center justify-center">
  <span className="mr-2">
    <i className="fa-solid fa-plus bg-[rgb(209,171,99)] size-6"></i>
  </span>
  <p className="text-2xl font-bold text-blue-950">{icontitle}</p>
</div>
        <button className="py-2 px-6 bg-[rgb(209,171,99)] text-white font-semibold text-xl rounded">{buttontitle}</button>
      </div>

      </div>
          </>
        )
      })
}

<Test />
<Footer />

     

    </>
  )
}
export default Rooms;
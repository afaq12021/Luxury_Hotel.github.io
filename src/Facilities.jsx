import React from "react";
import Header from "./components/header";
import image4 from "./assets/fac.jpg"
import image5 from "./assets/gym.jpeg"
import image6 from "./assets/BAR.jpeg"
import image7 from "./assets/SPA.jpeg"
import image8 from "./assets/POOL.jpeg"
import image9 from "./assets/REST.jpeg"
import Test from "./components/Test";
import Footer from "./components/Footer";

const Facilities = () => {
  const data=[
    {
      img:image5,
      title:"THE GYM"
    },
    {
      img:image6,
      title:"POOLSIDE BAR"
    },
    {
      img:image7,
      title:"THE SPA"
    },
    {
      img:image8,
      title:"SWIMMING POOL"
    },
    {
      img:image9,
      title:"THE RESTAURENT"
    },
    
  ]
  return (
    <>
      <Header image={image4} />


<div className="w-[70%] mx-auto mt-6 my-6">
<div className="flex justify-center items-center">
        <p className="sm:font-semibold sm:text-5xl text-3xl font-serif text-blue-950">Facilities</p>
        </div>
        <p className="sm:text-lg text-base text-blue-950">We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
and our modern luxury resort facilities will help you enjoy the best of all. </p>
      </div>


      {
        data.map(({img,title})=>{
          return(
            <>
              
            <div className="relative w-[1200px]  h-[800px]   mx-auto flex  justify-center items-end mb-20" style={{backgroundImage:`url(${img})`,backgroundSize:"cover", backgroundPosition:"center",backgroundRepeat:"no-repeat"}}> 
     

     <div className="w-[550px] h-14 bg-white flex justify-center items-center">
     <p className="font-bold text-4xl text-blue-950">{title}</p>
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
export default Facilities;
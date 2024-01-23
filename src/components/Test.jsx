import React from "react";

const Test=()=>{
    return(
        <>
      
        <div className="w-full flex justify-center items-center flex-col space-y-2">
        <h1 className="font-bold sm:text-4xl text-blue-950">Testimonials</h1>
        <p className="font-normal sm:text-xl text-blue-950">"Calm, Serene, Retro – What a way to relax and enjoy"</p>
        <p className=" text-blue-950"> Mr. and Mrs. Baxter, UK</p>
        <button class="flex items-center">
  <span class="mr-2 bg-[rgb(209,171,99)] py-1 px-2 rounded-sm text-white">
    <i class="fa-solid fa-less-than"></i>
  </span>
  <span class="ml-2 bg-[rgb(209,171,99)] py-1 px-2 rounded-sm text-white">
    <i class="fa-solid fa-greater-than"></i>
  </span>
</button>
        </div>
       

        </>
    )
}
export default Test;
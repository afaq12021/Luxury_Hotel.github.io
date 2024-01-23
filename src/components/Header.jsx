import React from "react";
import image1 from "../assets/p1.jpg"
const Header = ({image}) => {
    return (
        <>
            <div className="sm:h-[100vh] w-full flex justify-center items-start flex-col" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="sm:w-[700px] sm:h-[330px]  text-white sm:p-32 w-[320px] h-[250px] p-10">
                    <p className="font-normal sm:text-5xl text-xl">WELCOME TO</p>
                    <p className="font-serif font-bold sm:text-8xl text-4xl">LUXURY</p>
                    <p className="font-serif font-bold sm:text-5xl text-xl">HOTELS</p>
                    <p className="font-normal sm:text-2xl text-base">Book your stay and enjoy Luxury redefined at the most affordable rates.</p>
                </div>

                <div className="w-full flex items-center justify-center flex-col sm:mt-8 sm:p-10">
                    <button className="sm:font-medium font-normal text-sm sm:px-10 px-2 sm:py-4 py-2
      bg-[rgb(209,171,99)] flex items-center rounded shadow-sm hover:bg-[#E0B973] text-white"><i class="fa-solid fa-calendar-days mr-2"></i>BOOK NOW</button>
                </div>

                <div className="w-full flex items-center justify-center flex-col">
                    <div className="font-semibold text-xl text-white flex justify-center flex-col items-center mt-10">
                        <p >Scroll</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
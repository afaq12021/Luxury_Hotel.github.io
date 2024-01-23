import React from "react";
import image1 from "./assets/p1.jpg";
import image2 from "./assets/p2.jpeg"
import image3 from "./assets/p3.jpeg"
import Test from "./components/Test";
import Footer from "./components/Footer";
import Header from "./components/header";



const Home = () => {
    const data = [
        {
            title: "Luxury redefined",
            descrition: "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
            btnLabel: "EXPLORE",
            img: image2,
        },
        {
            title: "Leave your worries in the sand",
            descrition: "We love life at the beach. Being close to the ocean with access to endless sand beach ensures a relaxed state of mind. It seems like time stands still watching the ocean. ",
            btnLabel: "EXPLORE",
            img: image3,
        },
    ]
    return (
        <>
        <Header image={image1} />

            <div className=" w-full  flex justify-center items-center sm:p-6 p-2">
                <p className="font-normal sm:text-2xl text-sm text-blue-950">All our room types are including complementary breakfast</p>
            </div>

            <div className="sm:w-full flex flex-row sm:p-14 p-4 flex-wrap sm:gap-y-20">
                {
                    data.map(({img, title, descrition, btnLabel}) => {
                        return (
                            <>
                                <div className="lft sm:w-[600px] sm:h-[350px] w-[400px] h-[250px]  border-l p-4 sm:p-8 sm:space-y-6  border-blue-950  ">
                                    <h className="sm:text-4xl text-base font-bold text-blue-950">{title}</h>
                                    <p className="sm:text-2xl text-sm font-normal  text-blue-950">{descrition}</p>
                                    <button className=" bg-[rgb(209,171,99)] sm:px-6 px-2 py-1 rounded text-white sm:text-lg text-sm">{btnLabel}</button>
                                </div>

                                <div className="lft sm:w-[600px] sm:h-[350px] w-[400px] h-[250px] ">
                                    <img src={img} alt="" />
                                </div>
                            </>
                        )
                    })
                }

            </div>

            <Test />
            <Footer />

            






        </>
    )
}
export default Home;
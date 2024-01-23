import React from "react";
import Footer from "./components/Footer";


const Contact = () => {
  return (
    <>
      <div className="w-full h-[40vh] bg-blue-950 flex justify-center items-center">
        <p className="text-4xl font-bold text-white">CONTACT-US</p>
      </div>

      <div className="width-full h-[350px]  flex justify-center items-center ">
        <div className=" w-[60%] ">
          <h1 className="text-blue-950 text-2xl font-bold font-serif">WE ARE HERE FOR YOU</h1>
          <p className="text-blue-950 text-base font-normal">At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
            please forward it to our support desk and we will get back to you as soon as possible.</p>

        </div>

      </div>

      <div className="width-full h-[80vh]  flex justify-around items-center flex-row ">
        <div className="w-[500px] h-[400px]   flex flex-col gap-y-4 " >
          <p className="font-normal text-3xl text-blue-950">497 Evergreen Rd. Roseville, </p>
          <p className="font-normal text-3xl text-blue-950">CA 95673</p>
          <span className=" text-3xl font-bold text-blue-950">View map </span>
          <span className="font-normal text-3xl text-blue-950">Phone: +44 345 678 903</span>
          <span className="font-normal text-3xl text-blue-950">Email: luxury_hotels@gmail.com</span>
        </div>

        <div className="w-[500px] h-[500px]  flex flex-col my-4 p-8 text-blue-950 text-xl font-medium">
  <label htmlFor="name" className="mb-2">
    Name
  </label>
  <input
    type="text"
    id="name"
    placeholder="Enter Your Name"
    className="mb-4"
  />

  <label htmlFor="email" className="mb-2">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    placeholder="Enter Your Email"
    className="mb-4"
  />

  <label htmlFor="message" className="mb-2">
    Message
  </label>
  <textarea
    id="message"
    placeholder="Enter Your Message"
    rows="60"
    className="mb-4"
  ></textarea>

  <button className="bg-blue-950 font-semibold text-base text-white px-4 py-2 self-end">SUBMIT</button>
</div>

      </div>

      <Footer />



    </>
  )
}
export default Contact;
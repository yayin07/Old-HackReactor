import React from "react";
import one from "../img/1.jpg";
import two from "../img/2.jpg";
import three from "../img/3.jpg";

const BootCamp = () => {
  return (
    <div className="px-12 py-12">
      <div className="max-w-5xl mx-auto ">
        <h1 className=" text-3xl  text-center font-serif ">
          Our Coding Bootcamps
        </h1>

        <div className="flex flex-col drop-shadow-2xl  md:flex-row gap-6 mt-12">
          <div className="grid grid-cols-1  border-b  border-r border-gray-500 ">
            <img src={one} className="w-full h-64 " alt="" />
            <div className="text left py-12">
              <h5 className="text-2xl  text-center">
                12-Week Online <br /> Immersive (Full Time)
              </h5>
              <div className="text-sm mt-3 px-12 ">
                <p>
                  Our flagship, fast-paced bootcamp is designed to train those
                  with intermediate coding skills to become software engineers
                  in just 12 weeks. Learn live online, from wherever you are in
                  the world.”
                </p>
              </div>
            </div>
            <div className="text-Blue-400 border border-blue-500 hover:bg-blue-400 hover:text-white ">
              <a>Learn More</a>
            </div>
          </div>

          <div className="grid grid-cols-1  border-b  border-r border-gray-500 ">
            <img src={two} className="w-full h-64 " alt="" />
            <div className="text left py-12">
              <h5 className="text-2xl  text-center">
                12-Week Online <br /> Immersive (Full Time)
              </h5>
              <div className="text-sm mt-3 px-12 ">
                <p>
                  The carefully designed pace of our part-time coding bootcamp
                  allows for work-life balance as you train for a new
                  career.Those with intermediate coding skills will become
                  software engineers in 36 weeks, learning on nights and
                  weekends.
                </p>
              </div>
            </div>
            <div className=" text-Blue-400 border border-blue-500 hover:bg-blue-400 hover:text-white ">
              <a>Learn More</a>
            </div>
          </div>

          <div className="grid grid-cols-1  border-b  border-r border-gray-500 ">
            <img src={three} className="w-full h-64 " alt="" />
            <div className="text left py-12">
              <h5 className="text-2xl  mt-12 text-center">
                19-Week Online <br /> Immersive (Full Time)
              </h5>
              <div className="text-sm mt-3 px-12 ">
                <p>
                  Our flagship, fast-paced bootcamp is designed to train those
                  with intermediate coding skills to become software engineers
                  in just 12 weeks. Learn live online, from wherever you are in
                  the world.”
                </p>
              </div>
            </div>
            <div className="py-3 mx-2 md:py-0 text-Blue-400 border border-blue-500 hover:bg-blue-400 hover:text-white ">
              <a>Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootCamp;

// <div className="flex-col w-full  flex md:w-1/3 border-b border-r border-gray-500  ">
// <img src={three} className=" w-full h-64 " alt="" />

// <div className="text left">
//   <h5 className="text-2xl  mt-12 text-center">
//     19-Week Online <br /> Immersive (Full Time)
//   </h5>~
//   <p className="text-sm mt-3 ">
//     <p> newest program is designed </p>
//     <p> for those with little to no coding </p>
//     <p> experience. Start your journey </p>
//     <p> toward learning to code and </p>
//     <p> becoming a software engineer </p>
//     <p> today.</p>
//   </p>
// </div>

// </div>

{
  /* <div className=" flex-col flex md:w-1/3 border-b  border-r border-gray-500 ">
<img src={two} className="w-full h-64 " alt="" />

<div className="text left">
  <h5 className="text-2xl  mt-12 text-center ">
    36-Week Online <br /> Immersive (Part Time)
  </h5>
  <p className="text-sm mt-3  ">
    The carefully designed pace of our
   part-time coding bootcamp allows
   for work-life balance as you train 
   for a new career.Those with 
  intermediate coding skills will
  
    become software engineers in 36
     weeks, learning on nights and
    weekends. </p>
  </p>
</div>
</div> */
}

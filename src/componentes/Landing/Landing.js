import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landing.css";
import { BsArrowRight } from "react-icons/bs";
// import camera from "../../assets/why6.jpg";
// import { FaPhoneVolume } from "react-icons/fa";
// import { AnimatePresence, motion } from "framer-motion";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTwo, setCurrentSlideTwo] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    afterChange: (index) => {
      setCurrentSlide(index);
      setCurrentSlideTwo(index);
    },

    // afternewChange: (index) => {
    //   setCurrentSlideTwo(index);
    // },
    autoplay: "true",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="full-width-slider">
      {/* <h2> Responsive </h2> */}
      <Slider {...settings} className="">
        <div className="  ">
          <section className="    blog h-auto  bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]   text-white">
            <div className="  md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
              <div className="slide-content sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 ">
                <h2
                  style={{ lineHeight: "120%" }}
                  className={`slide-text text-[25px] lg:text-[40px] font-bold   text-left   text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-pink-600   ${
                    currentSlide === 0 ? "animated" : ""
                  }`}
                >
                  {" "}
                  Trishal Convention Center (TCC) is a Business Organization.
                </h2>

                <div className="flex  gap-4 mt-10 text-center">
                  <a
                    href="/"
                    className={`slide-text p-1 btn-sm lg:btn-md  lg:p-2 rounded-full  lg:text-lg font-bold  hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                      currentSlideTwo === 0 ? "animatedpic" : ""
                    }`}
                  >
                    MORE EXPLORE
                    <BsArrowRight className="text-lg   lg:ml-2" />
                  </a>
                </div>
              </div>

              <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
                <img
                  // src={camera}
                  alt=""
                  className={`slide-text  md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600   ${
                    currentSlideTwo === 0 ? "animatedpic" : ""
                  }`}
                />
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="white"
                  fill-opacity="1"
                  d="M0,288L120,266.7C240,245,480,203,720,208C960,213,1200,267,1320,293.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
              </svg>
            </div>
          </section>
        </div>
        <div className=" ">
          <section className="landingtwo  blog h-auto       text-white">
            <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
              <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                <h2
                  style={{ lineHeight: "120%" }}
                  className={`slide-text  text-[25px] lg:text-[40px] font-bold  text-left   text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600   ${
                    currentSlide === 1 ? "animated" : ""
                  }`}
                >
                  {" "}
                  
                  The Most Modern and Luxurious Residential Hotel in The Whole of Mymensingh
                </h2>

                <h1
                  className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
                  style={{ lineHeight: "120%", color: "white" }}
                ></h1>

                <div className="flex  gap-4 mt-10 text-center">
                  <a
                    href="/"
                    className={`slide-text btn-sm p-1 lg:btn-md lg:p-2 rounded-full  lg:text-lg font-bold  hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                      currentSlideTwo === 1 ? "animatedpic" : ""
                    }`}
                  >
                    MORE EXPLORE
                    <BsArrowRight className="text-lg   lg:ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="white"
                  fill-opacity="1"
                  d="M0,288L120,266.7C240,245,480,203,720,208C960,213,1200,267,1320,293.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
              </svg>
            </div>
          </section>
        </div>

        <div className=" ">
          <section className="landingthree  blog h-auto       text-white">
            <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
              <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                <h2
                  style={{ lineHeight: "120%" }}
                  className={`slide-text   text-[25px] lg:text-[40px] font-bold  text-left   text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  ${
                    currentSlide === 2 ? "animated" : ""
                  }`}
                >
                  {" "}
                  WTAERLILY HALL.
                </h2>

                <h1
                  className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
                  style={{ lineHeight: "120%", color: "white" }}
                ></h1>

                <div className="flex  gap-4 mt-10 text-center">
                  <a
                    href="/"
                    className={`slide-text btn-sm p-1 lg:btn-md lg:p-2 rounded-full  lg:text-lg font-bold  hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                      currentSlideTwo === 2 ? "animatedpic" : ""
                    }`}
                  >
                    MORE EXPLORE
                    <BsArrowRight className="text-lg   lg:ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="white"
                  fill-opacity="50"
                  d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
              </svg>
            </div>
          </section>
        </div>
      </Slider>
    </div>
  );
};

export default Landing;
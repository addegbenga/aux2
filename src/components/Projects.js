import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./style.css";
export default function Projects() {
  return (
    <div id="project" className="px-3 lg:mt-40 container mx-auto">
      <div>
        <div className="lg:flex justify-between items-center lg:my-14">
          <div>
            <h2 className="text-xl font-semibold headline lg:text-3xl my-3 lg:my-6">
              PROJECTS
            </h2>
            <h1 className="text-3xl lg:text-5xl font-bold">I Bring Results.</h1>
            <h1 className="text-3xl  lg:text-5xl font-bold">
              My clients are the proof.
            </h1>
          </div>

          <button className="bg-black text-white p-5 px-6 my-6 mb-10">
            View all projects
          </button>
        </div>

        <div className="flex ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" border bg-white">
                <img
                  className=" w-full  h-80"
                  src="/assets/banner.png"
                  alt="banner"
                />
                <div className="my-10 mt-7 px-4">
                  <h1 className="font-semibold text-sm lg:text-lg headline">
                    WEB DESIGN
                  </h1>
                  <h1 className="my-4 font-bold text-black text-opacity-60">
                    joggr Website Design
                  </h1>
                  <button className="flex items-center gap-2">
                    View project
                    <HiArrowSmRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" border bg-white">
                <img
                  className=" w-full  h-80"
                  src="/assets/banner.png"
                  alt="banner"
                />
                <div className="my-10 mt-7 px-4">
                  <h1 className="font-semibold text-sm lg:text-lg headline">
                    WEB DESIGN
                  </h1>
                  <h1 className="my-4 font-bold text-black text-opacity-60">
                    joggr Website Design
                  </h1>
                  <button className="flex items-center gap-2">
                    View project
                    <HiArrowSmRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className=" border bg-white">
                <img
                  className=" w-full  h-80"
                  src="/assets/banner.png"
                  alt="banner"
                />
                <div className="my-10 mt-7 px-4">
                  <h1 className="font-semibold text-sm lg:text-lg headline">
                    WEB DESIGN
                  </h1>
                  <h1 className="my-4 font-bold text-black text-opacity-60">
                    joggr Website Design
                  </h1>
                  <button className="flex items-center gap-2">
                    View project
                    <HiArrowSmRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className=" border bg-white">
                <img
                  className=" w-full  h-80"
                  src="/assets/banner.png"
                  alt="banner"
                />
                <div className="my-10 mt-7 px-4">
                  <h1 className="font-semibold text-sm lg:text-lg headline">
                    WEB DESIGN
                  </h1>
                  <h1 className="my-4 font-bold text-black text-opacity-60">
                    joggr Website Design
                  </h1>
                  <button className="flex items-center gap-2">
                    View project
                    <HiArrowSmRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <div className="flex justify-end mt-6">
          <button className="bg-white p-3">
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button className="bg-white p-3">
            <MdKeyboardArrowRight size={24} />
          </button>
        </div> */}
      </div>
    </div>
  );
}

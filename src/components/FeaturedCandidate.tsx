import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import CandidateCard from "./CandidateCard";

const images = ["/Can1.png", "/Can2.png", "/Can3.png"];

const FeaturedCandidate = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="max-w-7xl mx-auto mt-4 mb-5 px-4">
      <div className="flex items-center justify-between w-full mt-10 mb-6">
        <div className="flex flex-col items-start space-y-1.5">
          <h1 className="font-bold text-xl">Featured Candidates</h1>
          <h3 className="text-gray-500">
            Know your worth and find the job that qualify your life
          </h3>
        </div>
        <a
          href="#"
          className="text-blue-400 font-normal text-sm whitespace-nowrap"
        >
          Browse All Candidates &gt;
        </a>
      </div>
      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i}>
              <CandidateCard image={images[i % images.length]} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-gray-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-gray-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCandidate;

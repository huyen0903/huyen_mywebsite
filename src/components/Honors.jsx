import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import data_asean1 from "../assets/data-asean1.jpg";
import data_asean2 from "../assets/data-asean2.jpg";
import data_asean3 from "../assets/stroke1.jpg";

import elder1 from "../assets/elder1.jpg";
import elder2 from "../assets/elder2.jpg";

import honors1 from "../assets/honors1.jpg";
import honors2 from "../assets/honors2.jpg";
import honors3 from "../assets/honors3.jpg";
import dish2 from "../assets/dish2.jpeg";
import dish7 from "../assets/dish7.jpeg";

import cert from "../assets/cert.jpg";
import utalk from "../assets/utalk.jpg";
import intern from "../assets/intern.jpg";
import intern2 from "../assets/intern2.jpg";

const Honors = () => {
  const slides = [
    {
      id: 1,
      image: honors1,
      title: "Debate Teaching Assistant & Personal Coach",
      subtitle: "Hanoi Debate Summer Camp 2024",
      description: "English Connection Center",
      images: [honors1, honors2, honors3],
      bulletPoints: [
        "Organized and managed Debate and World Scholars’ Cup camp activities, including setting up debate venues, distributing materials, mentoring students, and ensuring seamless daily operations.",
        "Monitored student engagement and progress throughout the camp, providing actionable feedback to instructors and parents.",
        {
          text: "2023 Internship Evaluation",
          href: "https://drive.google.com/file/d/1X3W96bKBEWKylMSywCBEanzvL3kY-skS/view?usp=drive_link",
        },
        {
          text: "2024 Internship Evaluation",
          href: "https://drive.google.com/file/d/1X3W96bKBEWKylMSywCBEanzvL3kY-skS/view?usp=drive_link",
        },
      ],
    },
    {
      id: 2,
      image: dish2,
      title: "Researcher",
      description: "Multilingual support system for elderly people",
      images: [elder1, elder2],
    },
    {
      id: 3,
      image: data_asean3,
      title: "Researcher",
      description: "Raising awareness strokes among Vietnamese youth",
      images: [data_asean1, data_asean2],
    },
    {
      id: 4,
      image: intern,
      title: "Internship",
      description: "IOT-PI & Data Science Internship",
      images: [intern, intern2],
      bulletPoints: [
        "Gained hands-on experience with Internet of Things (IoT) technologies, focusing on cloud-based device control and data collection.",
        "Worked with the Raspberry Pi operating system, integrating sensors for real-time data acquisition and automation.",
        "Developed interactive database solutions using Python, enabling efficient data storage, processing, and analysis.",
        "Created dashboards and visualizations to monitor and analyze IoT-generated data, enhancing system performance insights.",
      ],
      certImage: cert,
    },
    {
      id: 5,
      image: utalk,
      title: "Champion",
      description: "U-talk English Speaking Contest",
    },
    {
      id: 6,
      image: dish7,
      title: "Scholarship Winner",
      description: "AFS Intercultural Programs (France)",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperRef = useRef(null);

  const [selectedSlide, setSelectedSlide] = useState(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  return (
    <section id="honors" className="py-16 bg-[#FFFFF0] relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="my-16 text-3xl lg:text-5xl font-medium text-black">
          Honors & Experience
        </h2>
        <div className="relative">
          {/* Swiper Container */}
          <Swiper
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={0}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} bg-black w-3 h-3 rounded-full mx-1"></span>`;
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="honors-slider pb-16"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={slide.id}
                className="flex justify-center"
                onClick={() => {
                  const clickedIndex = parseInt(
                    swiperRef.current.clickedSlide.getAttribute(
                      "data-swiper-slide-index"
                    )
                  );
                  const realIndex = swiperRef.current.realIndex;

                  if (realIndex === clickedIndex) {
                    // Open the details modal
                    setSelectedSlide(slide);
                    setSelectedSlideIndex(clickedIndex);
                  } else {
                    // Move to the clicked slide
                    swiperRef.current.slideToLoop(clickedIndex);
                  }
                }}
              >
                <div className="relative w-full h-full md:h-[42rem] overflow-hidden rounded-3xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105 rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-between pb-2">
                    <div className="flex justify-end"></div>
                    <div className="bg-black bg-opacity-40">
                      <h2 className="text-white text-xl font-semibold">
                        {slide.title}
                      </h2>
                      <p className="px-2 text-white text-base mt-2">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {selectedSlide && (
          <EnlargedSlide
            slide={selectedSlide}
            onClose={() => setSelectedSlide(null)}
            slides={slides}
            selectedIndex={selectedSlideIndex}
            setSelectedIndex={setSelectedSlideIndex}
            setSelectedSlide={setSelectedSlide}
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button
          ref={nextRef}
          className="swiper-button-next-custom bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

const EnlargedSlide = ({
  slide,
  onClose,
  slides,
  selectedIndex,
  setSelectedIndex,
  setSelectedSlide,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + slides.length) % slides.length;
    setSelectedIndex(prevIndex);
    setSelectedSlide(slides[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % slides.length;
    setSelectedIndex(nextIndex);
    setSelectedSlide(slides[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFFF0]"
      onClick={onClose}
    >
      <div
        className="relative flex w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-black text-4xl focus:outline-none z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center p-1"
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        {/* Image Section */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            animate ? "w-1/2" : "w-0"
          }`}
        >
          {slide.images && slide.images.length > 1 ? (
            slide.images.length === 2 ? (
              // Custom layout for slides with exactly two images
              <div className="flex flex-col h-full gap-2">
                {/* Top Image */}
                <div className="w-full h-1/2">
                  <img
                    src={slide.images[0]}
                    alt={slide.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      animate ? "scale-100" : "scale-50"
                    } rounded-3xl`}
                  />
                </div>
                {/* Bottom Image */}
                <div className="w-full h-1/2 gap-2">
                  <img
                    src={slide.images[1]}
                    alt={`${slide.title} 2`}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      animate ? "scale-100" : "scale-50"
                    } rounded-3xl`}
                  />
                </div>
              </div>
            ) : (
              // Layout for slides with more than two images
              <div className="flex flex-col h-full">
                {/* Top Image */}
                <div className="h-1/2">
                  <img
                    src={slide.images[0]}
                    alt={slide.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      animate ? "scale-100" : "scale-50"
                    } rounded-3xl`}
                  />
                </div>
                {/* Bottom Images */}
                <div className="flex h-1/2">
                  {slide.images.slice(1).map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="w-1/2 overflow-hidden rounded-3xl"
                    >
                      <img
                        src={imgSrc}
                        alt={`${slide.title} ${idx + 2}`}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          ) : (
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                animate ? "scale-100" : "scale-50"
              } rounded-3xl`}
            />
          )}
        </div>

        {/* Details Section */}
        <div
          className={`transition-all duration-500 flex flex-col ${
            animate ? "w-1/2 p-8" : "w-0 p-0"
          }`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-4xl focus:outline-none bg-black rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Close Modal"
          >
            &times;
          </button>
          <div className="flex-1 overflow-auto text-left">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              {slide.title}
            </h2>
            <p className="text-2xl text-justify">{slide.description}</p>

            {/* Render Bullet Points if they exist */}
            {slide.bulletPoints && slide.bulletPoints.length > 0 && (
              <div className="mt-4">
                {/* Container with horizontal margins */}
                <ul className="list-disc list-inside space-y-2">
                  {slide.bulletPoints.map((point, index) => (
                    <li key={index} className="text-xl text-justify">
                      {typeof point === "string" ? (
                        point
                      ) : (
                        <a
                          href={point.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {point.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {slide.certImage && (
            <div className="mt-4 flex justify-center items-center h-1/2">
              <img
                src={slide.certImage}
                alt="Certification"
                className="max-h-full max-w-full object-contain rounded-md shadow-lg"
              />
            </div>
          )}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none z-10 bg-black rounded-full w-12 h-12 flex items-center justify-center p-1"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Honors;

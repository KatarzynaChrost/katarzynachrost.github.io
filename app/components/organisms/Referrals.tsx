"use client";

import ScrollSection from "../atoms/ScrollSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import LinkedInIcon from "@/app/svgr/linkedIn";
import SectionTitle from "../atoms/SectionTitle";
import Link from "next/link";
import { referralsData } from "../data/data";

const Referrals = () => {
  return (
    <section id="referrals" className="bg-gradient py-20">
      <ScrollSection>
        <SectionTitle>Referrals</SectionTitle>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          style={{
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#71717a",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "1rem",
            "--swiper-pagination-bullet-horizontal-gap": "0.5rem",
          }}
        >
          {referralsData.map((rec, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900 p-4 py-2 sm:p-10 sm:py-2 rounded-3xl h-[470px] xl:h-[420px] flex flex-col justify-between mb-16 cursor-grab">
                <span className="text-zinc-50 font-semibold">
                  <div className="text-6xl">„</div>
                  <div className="text-center gradient-text m-2">
                    <span className="text-zinc-50 xs:text-lg text-opacity-60">
                      {rec.content}
                    </span>
                  </div>
                  <div className="text-6xl text-right">“</div>
                </span>
                <div className="flex flex-col text-end">
                  <Link
                    target="_blank"
                    href={rec.linkedin}
                    className="hover:text-[#0e76a8] hover:fill-[#0e76a8] fill-[#FAF9F6] text-lg transition-colors cursor-pointer flex items-center justify-end"
                  >
                    ~ {rec.name}
                    <LinkedInIcon
                      className="ml-1"
                      alt="LinkedIn icon"
                      width={25}
                      height={25}
                    />
                  </Link>
                  <p className="text-sm text-zinc-500 min-h-14">
                    {rec.position}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollSection>
    </section>
  );
};

export default Referrals;

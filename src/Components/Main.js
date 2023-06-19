/* eslint-disable */
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import News from "./News";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <div className="img-section"></div>
          <div className="text-section">
            <strong class="title">
              HIP한 음악으로 돌아온 6월 스파이더맨:<br></br> 어크로스 더
              유니버스
            </strong>
            <p className="title2">
              독보적인 세계관과 시청각적 향연을 선사할 영화 &lt;스파이더맨:
              <br></br>
              어크로스 더 유니버스&gt;가 영화가 끝난 후에도 심장을 뛰게 하는
              <br></br>
              명품 OST를 발매하며 우리의 눈과 귀를 사로잡고 있다.
            </p>
            <div className="img-style"></div>
          </div>
        </div>
      </div>

      <div className="main2">
        <div className="main-content2">
          <div className="prev">
            <BsArrowLeftCircle></BsArrowLeftCircle>
          </div>
          <div className="next">
            <BsArrowRightCircle></BsArrowRightCircle>
          </div>
          <Swiper
            // install Swiper modules
            className="main-slider"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            loop={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="slider-img">
              <img
                src="https://music-phinf.pstatic.net/20230613_128/1686619439025X1F1Y_JPEG/%C4%BF%B9%F61.jpg"
                className="slider-img"
              ></img>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://music-phinf.pstatic.net/20230607_184/1686107150207tTPyk_JPEG/%C4%BF%B9%F61.jpg"
                className="slider-img"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://music-phinf.pstatic.net/20230612_27/16865573993065B96u_JPEG/%C4%BF%B9%F61.jpg"
                className="slider-img"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://music-phinf.pstatic.net/20230605_41/1685929133819q2sNz_JPEG/%C4%BF%B9%F61.jpg"
                className="slider-img"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/today">
                <img
                  src="https://music-phinf.pstatic.net/20230605_41/1685929133819q2sNz_JPEG/%C4%BF%B9%F61.jpg"
                  className="slider-img"
                ></img>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://music-phinf.pstatic.net/20230605_41/1685929133819q2sNz_JPEG/%C4%BF%B9%F61.jpg"
                className="slider-img"
              ></img>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="title-posi">트렌드</div>
      </div>

      <News></News>
    </>
  );
};

export default Main;

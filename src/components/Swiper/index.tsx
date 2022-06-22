import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Banner } from "../Banner";
import { Flex } from "@chakra-ui/react";

export function Swiper() {
  return (
    <Flex maxWidth="1440px" mx="auto" py="8">
      <SwiperContainer
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Banner src="images/europe.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src="images/europe.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src="images/europe.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src="images/europe.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src="images/europe.svg" alt="" />
        </SwiperSlide>
      </SwiperContainer>
    </Flex>
  );
}

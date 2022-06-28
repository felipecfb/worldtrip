import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Banner } from "../Banner";
import { Flex, VStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

type ContinentProps = {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  imageSwiper: string;
};

interface SwiperProps {
  continents: ContinentProps[];
}

export function Swiper({ continents }: SwiperProps) {
  return (
    <Flex maxWidth="1240px" mx="auto" py="8">
      <SwiperContainer
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Link href={`/continent/${continent.slug}`}>
              <ChakraLink>
                <Flex
                  position="relative"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Banner
                    src={continent.imageSwiper}
                    alt={continent.title}
                    height="100%"
                    objectFit="cover"
                  />
                  <Flex position="absolute" top="0" height="100%" zIndex="5">
                    <Flex justifyContent="center" alignItems="center">
                      <VStack>
                        <Text
                          color="gray.50"
                          fontSize="48"
                          fontWeight="700"
                        >
                          {continent.title}
                        </Text>
                        <Text
                          color="gray.200"
                          fontSize="24"
                          fontWeight="700"
                        >
                          {continent.subtitle}
                        </Text>
                      </VStack>
                    </Flex>
                  </Flex>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Flex>
  );
}

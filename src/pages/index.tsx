import { Center, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Swiper } from "../components/Swiper";
import { TravelTypes } from "../components/TravelTypes";
import { api } from "../services/api";

type Continent = {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  imageSwiper: string;
};

interface ContinentsProps {
  continent: Continent[];
}

function Home({ continent }: ContinentsProps) {
  return (
    <>
      <Header showBackIcon={false} />
      <Banner src="assets/images/bannerHome.svg" alt="Banner" />
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={6}
        py="8"
        maxW="1400px"
        mx="auto"
      >
        <TravelTypes
          src="assets/images/nightLife.svg"
          alt="Night Life"
          title="vida noturna"
        />
        <TravelTypes
          src="assets/images/beach.svg"
          alt="Beach"
          title="praia"
          />
        <TravelTypes
          src="assets/images/modern.svg"
          alt="Night Life"
          title="moderno"
        />
        <TravelTypes
          src="assets/images/classic.svg"
          alt="Classic"
          title="clássico"
        />
        <TravelTypes
          src="assets/images/more.svg"
          alt="More"
          title="e mais..."
        />
      </Grid>
      <Center height="50px">
        <Divider maxWidth="90px" borderWidth="2px" borderColor="dark.text" />
      </Center>
      <Flex flexDirection="column" justify="center" align="center">
        <Text fontSize="36px" fontWeight="500" color="dark.text">
          Vamos nessa?
        </Text>
        <Text fontSize="36px" fontWeight="500" color="dark.text">
          Então escolha seu continente
        </Text>
      </Flex>
      <Swiper continents={continent} />
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const services = await api.get("continents");

  const continent = services.data.map((continent: Continent) => {
    return {
      id: continent.id,
      slug: continent.slug,
      title: continent.title,
      subtitle: continent.subtitle,
      imageSwiper: continent.imageSwiper,
    };
  });

  return {
    props: {
      continent,
    },
  };
};

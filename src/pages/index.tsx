import { Center, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <>
      <Header showBackIcon={false} />
      <Banner src="images/bannerHome.svg" alt="Banner" />
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={6}
        py="8"
        maxW="1400px"
        mx="auto"
      >
        <TravelTypes
          src="images/nightLife.svg"
          alt="Night Life"
          title="vida noturna"
        />
        <TravelTypes src="images/beach.svg" alt="Beach" title="praia" />
        <TravelTypes src="images/modern.svg" alt="Night Life" title="moderno" />
        <TravelTypes src="images/classic.svg" alt="Classic" title="clássico" />
        <TravelTypes src="images/more.svg" alt="More" title="e mais..." />
      </Grid>
      <Center height="50px">
        <Divider maxWidth="90px" borderWidth="2px" borderColor="#47585B" />
      </Center>
      <Flex flexDirection="column" justify="center" align="center">
        <Text fontSize="36px" fontWeight="500" color="#47585B">
          Vamos nessa?
        </Text>
        <Text fontSize="36px" fontWeight="500" color="#47585B">
          Então escolha seu continente
        </Text>
      </Flex>
    </>
  );
};

export default Home;

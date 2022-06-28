import { GetStaticPaths } from "next";
import { api } from "../../services/api";

type CitiesProps = {
  id: number;
  title: string;
  country: string;
  image: string;
  flag: string;
};

interface Cities {
  cities: CitiesProps[];
}

type Continent = {
  id: number;
  slug: string;
  title: string;
  info: string;
  countries: number;
  languages: number;
  imageBanner: string;
};

export default function Continent() {
  return (
    <div>
      <h1>Continent</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const continentServices = await api.get(`continents?slug=${slug}`);

  const continent = continentServices.data[0];

  const citiesServices = await api.get(`cities?continentId=${continent.id}`);

  const cities = citiesServices.data;

  return {
    props: {
      continent,
      cities,
    },
  };
};

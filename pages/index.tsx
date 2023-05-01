import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon`);
  const pokemonImgUrl = await res.json();

  return {
    props: {
      pokemonImgUrl,
    },
    revalidate: 10,
  };
};

type Props = {
  pokemonImgUrl: {
    img: string;
  };
};

const Home: NextPage<Props> = ({ pokemonImgUrl }) => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Image src={pokemonImgUrl.img} alt="pokemon" width={200} height={200} />
    </div>
  );
};

export default Home;

import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/pokemon");
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
      <main>
        <h1>ここはトップページです</h1>
      </main>
    </div>
  );
};

export default Home;

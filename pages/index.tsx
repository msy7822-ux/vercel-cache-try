import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { fetchPokemonImg } from "../lib/pokemon/fetchImg";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const id = Math.floor(Math.random() * ids.length);

  const pokemonImgUrl = await fetchPokemonImg(id).catch(
    async () => await fetchPokemonImg(id)
  );

  return {
    props: {
      pokemonImgUrl,
    },
    revalidate: 10, // 👈 ポイント
  };
};

type Props = {
  pokemonImgUrl: string;
};

const Home: NextPage<Props> = ({ pokemonImgUrl }) => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Image src={pokemonImgUrl} alt="pokemon" width={200} height={200} />
      <main>
        <h1>ここはトップページです</h1>
      </main>
    </div>
  );
};

export default Home;

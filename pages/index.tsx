import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon`);
  const response = await res.json();

  return {
    props: {
      response,
    },
    revalidate: 10,
  };
};

type Props = {
  response: {
    img: string;
    timestamp: string;
  };
};

const Home: NextPage<Props> = ({ response }) => {
  return (
    <div>
      <div>timestamp: {response.timestamp}</div>
      <Image src={response.img} alt="pokemon" width={200} height={200} />
    </div>
  );
};

export default Home;

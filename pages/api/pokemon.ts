// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchPokemonImg } from "../../lib/pokemon/fetchImg";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  let id = 1;
  id = Math.floor(Math.random() * 2);
  console.log(id);

  id = id === 0 ? 1 : 2;

  const pokemonImgUrl = await fetchPokemonImg(id);

  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=86400"
  // );

  res
    .status(200)
    .json({ img: pokemonImgUrl, timestamp: new Date().toISOString() });
}

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

  res.status(200).json({ img: pokemonImgUrl });
}

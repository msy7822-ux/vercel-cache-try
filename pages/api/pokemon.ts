// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchPokemonImg } from "../../lib/pokemon/fetchImg";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  let id = 1;

  setInterval(function () {
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    id = Math.floor(Math.random() * ids.length);
  }, 5000);

  const pokemonImgUrl = await fetchPokemonImg(id);

  res.status(200).json({ img: pokemonImgUrl });
}

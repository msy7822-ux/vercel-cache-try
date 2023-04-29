// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchPokemonImg } from "../../lib/pokemon/fetchImg";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id ? parseInt(req.query.id as string, 10) : 1;
  const pokemonImgUrl = await fetchPokemonImg(id);

  res.status(200).json({ img: pokemonImgUrl });
}

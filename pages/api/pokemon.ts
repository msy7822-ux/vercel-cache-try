// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fetchPokemon = fetch(
    process.env.NEXT_PUBLIC_POKEMON_API_BASE_URL ?? ""
  );

  console.log(fetchPokemon);
  res.status(200).json({ name: "John Doe" });
}

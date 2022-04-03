// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getWeather } from "../../shared/lib";
import { Weather } from "../../shared/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Weather>
) {
  const weather = await getWeather();
  res.status(200).json({ ...weather });
}

import type { NextApiRequest, NextApiResponse } from "next";
import { getShows } from "../../shared/lib/spotify";
// import { NowPlaying } from "../../shared/types";

const handleGetShows = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const shows = await getShows(5);
  res.status(200).json({ ...shows });
};

export default handleGetShows;

import type { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../shared/lib/spotify";
// import { NowPlaying } from "../../shared/types";

const handleTopTracks = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const tracks = await getTopTracks(10);
  res.status(200).json({ ...tracks });
};

export default handleTopTracks;

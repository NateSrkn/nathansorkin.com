import type { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../shared/lib/spotify";
import { NowPlaying } from "../../shared/types";

const handleNowPlaying = async (
  req: NextApiRequest,
  res: NextApiResponse<NowPlaying>
) => {
  const nowPlaying = await getNowPlaying();
  res.status(200).json({ ...nowPlaying });
};

export default handleNowPlaying;

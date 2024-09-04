import { useQuery } from "@tanstack/react-query";
import { spotify } from "@/shared/lib/spotify";

export const useNowPlayingQuery = () =>
  useQuery({
    queryKey: ["now-playing"],
    queryFn: spotify.nowPlaying,
    refetchInterval: (data) => {
      if (data.state.data) {
        return data.state.data.item.duration_ms - data.state.data.progress_ms;
      }
      return 1000 * 60 * 3;
    },
  });

import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "../components/Link"

export const Footer = () => {
  const [musicList, setMusicList] = useState({})
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    axios
      .get("https://ex-stat-ic.natesrkn.vercel.app/tracks")
      .then(({ data }) => setMusicList(data))
    axios.get("https://ex-stat-ic.natesrkn.vercel.app/weather").then(({ data }) => setWeather(data))
  }, [])

  return (
    <footer>
      <div className="now-playing">
        <Link to={"https://open.spotify.com/user/natesrkn"}>
          {musicList.nowPlaying ? (
            <React.Fragment>
              Now Playing - {musicList.nowPlaying.artist} - {musicList.nowPlaying.song}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {musicList.recentTracks &&
                `Recently Played - ${musicList.recentTracks[0].artist} - ${musicList.recentTracks[0].song}`}
            </React.Fragment>
          )}
        </Link>
      </div>
      {weather && (
        <div className="weather">
          {weather?.city} / {Math.round(weather?.temperature)}
          <sup>&#8457;</sup>
        </div>
      )}
    </footer>
  )
}

import { useQuery } from "@tanstack/react-query";
import { Weather } from "@/shared/types";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeather = async (city: string): Promise<Weather> => {
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams({
    q: city,
    appid: process.env.NEXT_PUBLIC_WEATHER_KEY!,
    units: "imperial",
  }).toString();
  const res = await fetch(url);
  return res.json();
};

export const useWeatherQuery = (city: string = "Columbus") =>
  useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

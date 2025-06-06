"use client";

import { useQuery } from "@tanstack/react-query";
import { getCityWeather } from "src/app/api/weather/getCityWeather";
import { useDebounce } from "src/designSystem/helpers";

type useWeatherSearchData = {
  cityName: string;
  temperature: number;
  condition: string;
  conditionDescription: string;
  conditionIconCode: string;
};

type useWeatherSearchReturn = {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
  data: useWeatherSearchData | undefined;
};

const useWeatherSearch = (cityName: string): useWeatherSearchReturn => {
  const debounceDelay = 400; // ms
  const debouncedCityName = useDebounce<string>(cityName, debounceDelay); // debouncing user input to avoid every keystroke triggering an API request

  const { data, error, isError, isFetching } = useQuery({
    queryKey: ["getCityWeather", debouncedCityName],
    queryFn: () => getCityWeather(debouncedCityName),
    enabled: !!debouncedCityName,
    staleTime: 60000, // 60 seconds
    retry: false,
  });

  const isLoading = isFetching;

  const formattedWeatherData: useWeatherSearchData = {
    cityName: data?.name as string,
    temperature: data?.main?.temp as number,
    condition: data?.weather?.[0]?.main as string,
    conditionDescription: data?.weather?.[0]?.description as string,
    conditionIconCode: data?.weather?.[0]?.icon as string,
  };

  const formattedErrorMessage =
    error?.message === "Request failed with status code 404"
      ? "We were unable to locate the provided city. Please try another."
      : error?.message;
  return {
    data: formattedWeatherData,
    errorMessage: formattedErrorMessage,
    isLoading,
    isError,
  };
};

export default useWeatherSearch;

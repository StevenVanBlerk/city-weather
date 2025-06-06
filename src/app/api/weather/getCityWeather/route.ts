import { NextRequest, NextResponse } from "next/server";
import { openWeatherAPI } from "src/app/api/api";
import { GetCityWeatherResponse } from "./getCityWeather";
import handleRouteError from "src/app/api/utils/handleRouteError";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const cityName = searchParams.get("cityName");

    // Allowing users to test unexpected error behaviour
    if (cityName === "debugforceerror") {
      throw Error("DEBUG ERROR");
    }

    // Handling incomplete requests before making an OpenWeather API request
    if (!cityName) {
      return NextResponse.json(
        {
          error:
            "Failed to fetch weather conditions. Please provide a city name.",
        },
        { status: 400 }
      );
    }

    const response = await openWeatherAPI.get<GetCityWeatherResponse>(
      `weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return handleRouteError({
      error,
      fallbackMessage:
        "Unexpectedly failed to fetch weather conditions. Please try again later.",
    });
  }
}

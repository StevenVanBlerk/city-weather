import { AxiosError, isAxiosError } from "axios";
import { NextResponse } from "next/server";

type handleRouteErrorParams = { error: unknown; fallbackMessage: string };

const handleRouteError = ({
  error,
  fallbackMessage = "An unexpected error occurred.",
}: handleRouteErrorParams) => {
  console.error("Route error:\n", error);

  if (isAxiosError(error)) {
    const axiosError = error as AxiosError;
    return NextResponse.json(
      {
        error: axiosError.message || fallbackMessage,
      },
      { status: axiosError.status || 500 }
    );
  }

  return NextResponse.json(
    {
      error: fallbackMessage,
    },
    { status: 500 }
  );
};

export default handleRouteError;

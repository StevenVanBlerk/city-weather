import Image from "next/image";

const WeatherIcon = ({ iconCode }: { iconCode: string }) => {
  return (
    <Image
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt="Weather condition icon"
      width={100}
      height={100}
    />
  );
};

export default WeatherIcon;

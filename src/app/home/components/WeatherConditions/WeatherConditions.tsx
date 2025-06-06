import { Card } from "src/designSystem/components";
import WeatherIcon from "./components/WeatherIcon";
import styles from "./weatherConditions.module.css";
type WeatherConditionsParams = {
  conditions: {
    cityName: string;
    temperature: number;
    condition: string;
    conditionDescription: string;
    conditionIconCode: string;
  };
};

const WeatherConditions = ({ conditions }: WeatherConditionsParams) => {
  return (
    <Card>
      <h2>Current weather</h2>
      <div className={styles.flexColumn}>
        <div>City: {conditions.cityName || "City name not found"}</div>
        <div>
          Temperature:{" "}
          {`${conditions.temperature} °C` || "Temperature not found"}
        </div>
        <div>
          <div className={styles.conditions}>
            {conditions.conditionIconCode && (
              <WeatherIcon iconCode={conditions.conditionIconCode} />
            )}
            <div>
              {conditions.condition} ({conditions.conditionDescription})
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeatherConditions;

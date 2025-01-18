import { AirQuality } from "./AirQuality";
import { CardWeather } from "./CardWeather";
import { SunriseSunset } from "./SunriseSunset";

export const TodayHighlights = ({ data, airData }) => {
  const humidity = data.list?.[0].main?.humidity;
  const pressure = data.list?.[0].main?.pressure;
  const visibility = data.list?.[0]?.visibility / 1000;
  const feelLikes = Math.floor(data.list?.[0].main?.feels_like);

  return (
    <div className="card">
      <h2 className="text-f-primary text-2xl">Today Highlights</h2>
      <div className="grid xl:grid-cols-2 lg:gap-4">
        <div className="grid lg:grid-rows-[auto_auto] lg:gap-4">
          <div className="lg:row-span-1">
            <AirQuality airData={airData} />
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-4">
            <CardWeather
              data={data}
              title={"Humidity"}
              icon={"humidity"}
              vl={humidity}
              unity={"%"}
            />
            <CardWeather
              data={data}
              title={"Pressure"}
              icon={"wind"}
              vl={pressure}
              unity={<sub className="text-f-third">hPa</sub>}
            />
          </div>
        </div>

        <div className="grid lg:grid-rows-[auto_auto] lg:gap-4">
          <div className="lg:row-span-1">
            <SunriseSunset data={data} />
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-4">
            <CardWeather
              data={data}
              title={"Visibility"}
              icon={"visibility"}
              vl={visibility}
              unity={"km"}
            />
            <CardWeather
              data={data}
              title={"FeelLikes"}
              icon={"thermometer"}
              vl={feelLikes}
              unity={<sup>c</sup>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

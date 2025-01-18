export const AirQuality = ({ airData }) => {
  const pm25 = airData.list?.[0]?.components?.pm2_5;
  const so2 = airData.list?.[0]?.components?.so2;
  const no2 = airData.list?.[0]?.components?.no2;
  const o3 = airData.list?.[0]?.components?.o3;
  const aqi = airData.list?.[0]?.main?.aqi;

  const getAirQualityStatus = (aqi) => {
    switch (aqi) {
      case 1:
        return (
          <p className="bg-green-400 text-f-forth font-semibold rounded-full px-2 py-1 w-24 lg:w-28 text-center">
            Good
          </p>
        );
      case 2:
        return (
          <p className="bg-green-300 text-f-forth font-semibold rounded-full px-2 py-1 w-24 lg:w-28 text-center">
            Fair
          </p>
        );
      case 3:
        return (
          <p className="bg-green-100 text-f-forth font-semibold rounded-full px-2 py-1 w-24 lg:w-28 text-center">
            Moderate
          </p>
        );
      case 4:
        return (
          <p className="bg-red-300 text-f-forth font-semibold rounded-full px-2 py-1 w-24 lg:w-28 text-center">
            Poor
          </p>
        );
      case 5:
        return (
          <p className="bg-red-500 text-f-forth font-semibold rounded-full px-2 py-1 w-24 lg:w-28 text-center">
            Poor
          </p>
        );
    }
  };

  return (
    <div className="bg-box-bg-secondary rounded-3xl mt-6 p-6">
      <div className="flex gap-6 items-center ">
        <h3 className="text-base lg:text-2xl text-f-third ">
          Air Quality Index
        </h3>
        <div className="mx-auto">{getAirQualityStatus(aqi)}</div>
      </div>
      <div className="flex items-center gap-4 mt-6 ">
        <div>
          <i className="fa-solid fa-wind text-3xl lg:text-4xl" />
        </div>
        <ul className="grid grid-cols-12 gap-4 w-full text-xl lg:text-2xl">
          <li className="flex items-center gap-1 col-span-6">
            <p>{pm25}</p>
            <p className="text-f-third text-base">
              PM<sub>2.5</sub>
            </p>
          </li>
          <li className="flex items-center gap-1 col-span-6">
            <p>{so2}</p>
            <p className="text-f-third text-base">
              <sub>SO2</sub>
            </p>
          </li>
          <li className="flex items-center gap-1 col-span-6">
            <p>{no2}</p>
            <p className="text-f-third text-base">
              <sub>NO2</sub>
            </p>
          </li>
          <li className="flex items-center gap-1 col-span-6">
            <p>{o3}</p>
            <p className="text-f-third text-base">
              <sub>O3</sub>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

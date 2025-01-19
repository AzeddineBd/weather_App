export const TodayAt = ({ data }) => {
  const twentyFourHoursData = data?.list?.slice(0, 8) || [];

  if (twentyFourHoursData.length === 0) {
    return <p className="text-f-primary text-2xl px-5">No data available</p>;
  }

  return (
    <div className="overflow-x-auto ">
      <h2 className="text-f-primary text-2xl px-5">Today At</h2>
      {/* Weather AT */}
      <div className="">
        <ul className="flex gap-4 px-5">
          {twentyFourHoursData.map((time, i) => {
            // Time
            const hour = new Date(time.dt_txt).getHours();
            const formattedHour = hour % 12 || 12;
            const amPm = hour >= 12 ? "PM" : "AM";

            // Icon
            const icon = time.weather?.[0]?.icon;

            // Dergise
            const deg = Math.round(time.main.temp);

            return (
              <li
                key={i}
                className="flex flex-col flex-shrink-0 items-center gap-6 text-white bg-box-bg my-6 mx-1 rounded-3xl overflow-hidden p-5 w-36 "
              >
                <p className="text-2xl">
                  {formattedHour} {amPm}
                </p>
                <img
                  src={`public/assets/images/weather_icons/${icon}.png`}
                  alt={time.weather?.[0]?.description || "Weather icon"}
                  className="w-14"
                />

                <p className="text-2xl">{deg}&deg;</p>
              </li>
            );
          })}
        </ul>
        {/* Air Deriction At */}
        <ul className="flex gap-4 px-5">
          {twentyFourHoursData.map((time, i) => {
            // Time
            const hour = new Date(time.dt_txt).getHours();
            const formattedHour = hour % 12 || 12;
            const amPm = hour >= 12 ? "PM" : "AM";

            // Wind Speed
            const speed = Math.floor(time.wind?.speed * 3.6);
            // Wind direction
            const windDer = time.wind?.deg;

            return (
              <li
                key={i}
                className="flex flex-col flex-shrink-0 items-center gap-6 text-white bg-box-bg my-6 mx-1 rounded-3xl overflow-hidden p-5 w-36 "
              >
                <p className="text-2xl">
                  {formattedHour} {amPm}
                </p>
                <img
                  style={{ transform: `rotate(${windDer}deg)` }}
                  src={`./public/assets/images/weather_icons/direction.png`}
                  alt=""
                  className="w-14"
                />
                <p className="text-2xl">{speed} km/h</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

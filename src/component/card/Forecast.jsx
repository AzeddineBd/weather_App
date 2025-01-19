export const Forecast = ({ data }) => {
  // تجميع البيانات حسب اليوم
  const dailyData = {};
  data?.list?.forEach((item) => {
    const date = item.dt_txt.split(" ")[0]; // استخراج التاريخ فقط (YYYY-MM-DD)
    if (!dailyData[date]) {
      dailyData[date] = item;
    }
  });

  const nextFiveDays = Object.values(dailyData).slice(0, 5);

  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div>
      <h2 className="text-f-primary text-2xl px-5">5 Days Forecast</h2>
      <div className="text-white bg-box-bg m-6 rounded-3xl overflow-hidden p-5 ">
        <ul>
          {nextFiveDays.map((day, index) => {
            const date = new Date(day.dt_txt);
            const dayName = weekDay[date.getDay()];
            const dayDate = `${date.getDate()} ${months[date.getMonth()]}`;
            const temp = Math.floor(day.main.temp);
            const icon = day.weather[0].icon;

            return (
              <li key={index} className="grid grid-cols-12 mb-6 last:mb-0 ">
                <div className="flex gap-5 items-center col-span-4">
                  <img
                    src={`assets/images/weather_icons/${icon}.png`}
                    alt={day.weather[0].description}
                    className="w-8 lg:w-10"
                  />
                  <p className="text-lg lg:text-2xl">
                    {temp}&deg;<sup>c</sup>
                  </p>
                </div>
                <div className="col-span-4 mx-auto">
                  <p className="text-sm text-f-third">{dayDate}</p>
                </div>
                <div className="col-span-4 mx-auto">
                  <p className="text-sm text-f-third">{dayName}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

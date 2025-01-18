export const CurrentWeatherCard = ({ data }) => {
  // CONST VARIABLE:
  const imgIcon = data.list?.[0]?.weather?.[0]?.icon;
  const nameCity = data?.city?.name;
  const temp = Math.floor(data.list?.[0].main?.temp);
  const nameCountry = data.city?.country;
  const weatherMain = data.list?.[0]?.weather?.[0].main;
  const apiDate = data.list?.[0]?.dt_txt;

  // DATE:
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
  const d = new Date(apiDate);
  const date = `${weekDay[d.getDay()]} ${d.getDate()}, ${months[d.getMonth()]}`;

  return (
    <div className="card">
      <div className="flex">
        <p className="text-6xl lg:text-8xl">
          {temp}&deg;<sup>c</sup>
        </p>
        <img
          className="w-16 h-16 lg:w-24 lg:h-24 mx-auto"
          src={`./public/assets/images/weather_icons/${imgIcon}.png`}
          alt="Overcast Clouds"
        />
      </div>

      <p className="underlineBorder text-f-primary mt-4 pb-4 mb-4 textLarg">
        {weatherMain}
      </p>
      <ul className=" text-f-primary">
        <li className="flex items-center gap-2 mb-3">
          <i className="fa-solid fa-calendar-days textLarg" />
          <p className="text-f-third textLarg">{date}</p>
        </li>
        <li className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot textLarg" />
          <p className="text-f-third textLarg">
            {nameCity}, {nameCountry}
          </p>
        </li>
      </ul>
    </div>
  );
};

// <div className="text-white bg-box-bg m-6 rounded-3xl overflow-hidden p-5 ">
//   <h2 className="text-f-primary text-2xl mb-4">Now</h2>
//   <div className="flex">
//     <p className="text-6xl">
//       {temp}&deg;<sup>c</sup>
//     </p>
//     <img
//       className="w-16 h-16 mx-auto"
//       src={`./public/assets/images/weather_icons/${imgIcon}.png`}
//       alt="Overcast Clouds"
//     />
//   </div>
//   <p className="text-f-primary mt-4 pb-4 border-b-2 border-f-secondary mb-4">
//     {weatherMain}
//   </p>
//   <ul className="text-f-primary">
//     <li className="flex items-center gap-2 mb-3">
//       <i className="fa-solid fa-calendar-days"></i>
//       <p className="text-f-third">{date}</p>
//     </li>
//     <li className="flex items-center gap-2">
//       <i className="fa-solid fa-location-dot"></i>
//       <p className="text-f-third">
//         {nameCity}, {nameCountry}
//       </p>
//     </li>
//   </ul>
// </div>

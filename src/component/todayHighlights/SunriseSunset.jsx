export const SunriseSunset = ({ data }) => {
  const sunset = new Date(data.city?.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunrise = new Date(data.city?.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-box-bg-secondary py-6 px-8 mt-6 rounded-3xl ">
      <h3 className="text-2xl text-f-third">Sunrise & Sunset</h3>
      <div className="grid grid-cols-2">
        {/* SUNRISE */}
        <div className="p-5 flex flex-col gap-4 lg:flex-row lg:items-center">
          <img
            src="assets/images/todayhightlights/sunset_sunrise/sun.png"
            alt="Sunrise icon"
            className="w-10 h-10 text-slate-200 lg:w-10 lg:h-10"
          />
          <div>
            <p className="text-lg text-f-third lg:text-xl">Sunrise</p>
            <p className="text-xl md:text-2xl lg:text-2xl">{sunrise} AM</p>
          </div>
        </div>

        {/* SUNSET */}
        <div className="p-5 flex flex-col gap-4 lg:flex-row lg:items-center">
          <img
            src="assets/images/todayhightlights/sunset_sunrise/moon.png"
            alt="Sunrise icon"
            className="w-9 text-slate-200 lg:w-10 lg:h-10"
          />
          <div>
            <p className="text-lg text-f-third lg:text-xl">Sunset</p>
            <p className="text-xl md:text-2xl lg:text-2xl">{sunset} PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

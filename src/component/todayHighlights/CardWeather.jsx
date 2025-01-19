export const CardWeather = ({ data, title, icon, vl, unity }) => {
  return (
    <div className="bg-box-bg-secondary py-6 px-8 mt-6 rounded-3xl">
      <h3 className="text-2xl text-f-third">{title}</h3>
      <div className="py-8 flex justify-between items-center">
        <img
          src={`assets/images/todayhightlights/${icon}.png`}
          alt="humidity icon"
          className="w-12 h-12 text-slate-200"
        />
        <p className="text-3xl">
          {vl}
          {unity}
        </p>
      </div>
    </div>
  );
};

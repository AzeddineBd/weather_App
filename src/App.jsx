import { Header } from "./component/header/Header";
import { CurrentWeatherCard } from "./component/card/CurrentWeatherCard";
import { Forecast } from "./component/card/Forecast";
import { TodayHighlights } from "./component/todayHighlights/TodayHighlights";
import { useEffect, useState } from "react";
import { fetchAirData, fetchWeatherData, fetchCity } from "./utils/ApiFile";
import { TodayAt } from "./component/todayAt/TodayAt";
import { debounce } from "lodash";
import { Loading } from "./component/header/laoding/loading";
import { Footer } from "./component/footer/Footer";

// App Component

function App() {
  // The Hooks
  const [data, setData] = useState({});
  const [airData, setAirData] = useState({});
  const [location, setLocation] = useState("alger");
  const [isExpanded, setIsExpanded] = useState(false);
  const [Suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [userLocation, setUserLocation] = useState(null);

  // const handleLocationChange = (location) => {
  //   setUserLocation(location);
  //   getCityName(location.latitude, location.longitude);
  // };

  // const getCityName = async (lat, lon) => {
  //   try {
  //     const response = await fetch(
  //       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
  //     );
  //     const cityData = await response.json();
  //     if (cityData.locality) {
  //       setLocation(cityData.locality);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching city name:", error);
  //   }
  // };

  // Get Citys Names

  const fetchCitySuggestions = debounce(async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
    setIsLoading(true);

    try {
      const cityData = await fetchCity(query);
      setSuggestions(cityData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, 300);

  // Call fetchCitySuggestions If location Change
  useEffect(() => {
    fetchCitySuggestions(location);
  }, [location]);

  // Get Air Quality Data
  const getAirData = async (lat, lon) => {
    try {
      const airData = await fetchAirData(lat, lon);
      if (airData) {
        setAirData(airData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get weather Data
  const getWeatherData = async (location) => {
    setIsLoading(true);
    try {
      const weatherData = await fetchWeatherData(location);
      if (weatherData) {
        setData(weatherData);

        // Get Lat & Lon
        const lon = weatherData?.city?.coord?.lon;
        const lat = weatherData?.city?.coord?.lat;

        // If weatherData Exist call getAirData with lat & lon
        await getAirData(lat, lon);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get data if location change
  useEffect(() => {
    getWeatherData(location);
    setLocation("");
  }, []);

  // Search function if press "Enter"
  const searchLocation = (event) => {
    if (event.type === "keypress" && event.key !== "Enter") {
      return;
    }
    getWeatherData(location);
    setIsExpanded(false);
    setLocation("");
  };

  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50 p-4 bg-bdoy-bg ">
        <Header
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          Suggestions={Suggestions}
          isLoading={isLoading}
          // onLocationChange={handleLocationChange}
        />
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="md:container md:mx-auto lg:grid lg:grid-cols-[400px_1fr] lg:grid-rows-[auto_auto] lg:overflow-hidden">
          <div className="col-span-1">
            <CurrentWeatherCard data={data} />
            <Forecast data={data} />
          </div>
          <div className="col-start-2 row-span-2 overflow-x-auto">
            <TodayHighlights data={data} airData={airData} />
            <TodayAt data={data} />
            <div className="py-10 text-f-primary">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

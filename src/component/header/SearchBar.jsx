import { Loading } from "./laoding/loading";
import { PhoneSearchBar } from "./PhoneSearchBar";
import PropTypes from "prop-types";

export const SearchBar = ({
  isExpanded,
  setIsExpanded,
  location,
  setLocation,
  searchLocation,
  Suggestions,
  isLoading,
}) => {
  const toggleNavBar = () => {
    setIsExpanded(!isExpanded);
  };

  // const names = Suggestions.map((item) => item?.name).filter(Boolean);
  const filteredSuggestions = Suggestions.filter(
    (item) => item?.name && item?.country
  );

  return (
    <>
      {/* LARGE NAVBAR */}
      <div className="hidden lg:block relative">
        <div className="bg-box-bg flex px-4 py-1 rounded-full overflow-hidden lg:justify-between lg:w-96 md:w-64 ">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            type="text"
            placeholder="Search City.."
            className="bg-box-bg outline-none caret-f-primary text-f-primary"
          />

          <i
            className="fas fa-search p-3 cursor-pointer bg-red-600d- text-f-primary "
            onClick={searchLocation}
          />
        </div>

        {(filteredSuggestions.length > 0 || isLoading) &&
          location.length > 2 && (
            <div className="mt-2 bg-box-bg text-f-primary overflow-hidden rounded-lg shadow-lg absolute w-full z-10">
              <ul>
                {isLoading && <Loading />}
                {filteredSuggestions.map((city, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-f-secondary cursor-pointer"
                    onClick={() => {
                      setLocation(`${city.name}, ${city.country}`);
                      searchLocation({ type: "click" });
                    }}
                  >
                    {city.name}, {city.country}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
      {/* PHONE NAVBAR */}
      <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block">
        <div className="bg-box-bg flex px-1 py-1 rounded-full overflow-hidden w-auto">
          <i
            onClick={toggleNavBar}
            className="fas fa-search p-3 cursor-pointer bg-box-bg text-f-primary"
          />
        </div>
        <div>
          {isExpanded && (
            <PhoneSearchBar
              setIsExpanded={setIsExpanded}
              location={location}
              setLocation={setLocation}
              searchLocation={searchLocation}
              isExpanded={isExpanded}
              isLoading={isLoading}
              Suggestions={Suggestions}
            />
          )}
        </div>
      </div>
    </>
  );
};

SearchBar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired,
};

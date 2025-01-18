import PropTypes from "prop-types";
import { Loading } from "./laoding/Loading";

export const PhoneSearchBar = ({
  setIsExpanded,
  location,
  setLocation,
  searchLocation,
  isLoading,
  Suggestions,
}) => {
  const filteredSuggestions = Suggestions.filter(
    (item) => item?.name && item?.country
  );
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-bdoy-bg z-50">
        <div className="px-4 bg-bdoy-bg flex items-center justify-around border-b border-box-bg">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            type="text"
            placeholder="Search City..."
            className="bg-bdoy-bg p-4 outline-none w-full caret-f-primary text-f-primary"
          />

          <i
            className="fas fa-search cursor-pointer text-f-primary"
            onClick={searchLocation}
          />
          <i
            className="fas fa-close p-3 cursor-pointer text-f-primary"
            onClick={() => setIsExpanded(false)}
          />
        </div>
        {(filteredSuggestions.length > 0 || isLoading) &&
          location.length > 2 && (
            <div className="mt-2 bg-bdoy-bg text-f-primary overflow-hidden rounded-lg shadow-lg absolute w-full z-10">
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
    </>
  );
};

PhoneSearchBar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired,
};

import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
// import { Location } from "./Location";
import PropTypes from "prop-types";

export const Header = ({
  location,
  setLocation,
  searchLocation,
  isExpanded,
  setIsExpanded,
  Suggestions,
  isLoading,
  // onLocationChange,
}) => {
  return (
    <>
      <div className="flex items-center justify-between mt-2 lg:container lg:mx-auto">
        {!isExpanded && <Logo />}
        <div>
          <SearchBar
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            location={location}
            setLocation={setLocation}
            searchLocation={searchLocation}
            Suggestions={Suggestions}
            isLoading={isLoading}
          />
        </div>
        {/* {!isExpanded && (
          <div className="flex items-center">
            <Location onLocationChange={onLocationChange} />
          </div>
        )} */}
      </div>
    </>
  );
};

Header.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
};

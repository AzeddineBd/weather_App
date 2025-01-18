import { useState, useEffect } from "react";

export const Location = ({ onLocationChange }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (userLocation) {
      onLocationChange(userLocation);
    }
  }, [userLocation]);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (posotion) => {
          const { latitude, longitude } = posotion.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.log(
            "An error occurred while obtaining the user's location:",
            error
          );
        }
      );
    } else {
      console.log("GeoLocation It's Not Availble");
    }
  };
  return (
    <>
      <div className="locationBtn">
        <i
          onClick={getUserLocation}
          className="fas fa-location bg-location text-bdoy-bg p-4 rounded-full cursor-pointer"
        />
      </div>
    </>
  );
};

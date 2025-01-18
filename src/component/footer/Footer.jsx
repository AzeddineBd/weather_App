import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="card">
      <div className="mb-4 text-center">
        <p className="text-sm text-f-third">
          This application provides real-time weather updates, air quality data,
          and forecasts for cities worldwide. Built with modern web
          technologies, it offers a user-friendly interface to help you stay
          informed about the weather conditions in your area.
        </p>
      </div>

      <div className="mb-4 text-center">
        <p className="text-sm text-f-third">
          &copy; {new Date().getFullYear()} All rights reserved. Template by{" "}
          <span className="font-bold">
            <a
              href="https://github.com/codewithsadee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-f-primary hover:underline"
            >
              <FontAwesomeIcon icon={faGithub} /> codewithsadee
            </a>
          </span>
          . Coded by{" "}
          <span className="font-bold">
            {" "}
            <a
              href="mailto:azzedinebedar@gmail.com"
              className="text-f-primary hover:underline"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Azzedine
            </a>
          </span>
          .
        </p>
      </div>

      <div className="text-center">
        <p className="text-sm text-f-third">
          Contact me at{" "}
          <span className="font-bold">
            <a
              href="mailto:azzedinebedar@gmail.com"
              className="text-f-primary hover:underline"
            >
              azzedinebedar@gmail.com
            </a>
          </span>
          .
        </p>
      </div>
    </footer>
  );
};

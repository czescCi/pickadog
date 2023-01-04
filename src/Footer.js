import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from 'react-responsive';

const Footer = () => {

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const deviceStyle = isMobile ? "mobile-class-footer" : "desktop-class-footer";
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const orientationStyle = isPortrait ? 'portrait' : 'landscape';
  const deviceAndOrientationStyle = deviceStyle + " " + orientationStyle;
  const year = new Date().getFullYear();

  return (
    <footer className={deviceAndOrientationStyle}>
      {`Copyright © JS ${year}`}
      <a
        href="https://github.com/czescCi/pickadog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} id="github-logo" />
      </a>
    </footer>
  );
};

export default Footer;

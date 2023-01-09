import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
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

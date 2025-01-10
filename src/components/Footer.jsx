import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer flex bg-neutral text-neutral-content items-center p-4 justify-between">
      <aside className="flex justify-center flex-grow">
        <p>Copyright © {new Date().getFullYear()} - All right reserved </p>
      </aside>
      
      <nav className="flex items-center justify-center space-x-4">
        {/* GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>

        {/* Twitter (ancien X) */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;

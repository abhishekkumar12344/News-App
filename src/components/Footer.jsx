import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get current year

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>© {currentYear} NewsApp. All rights reserved.</p>
        </div>
        <div className="footer-section">
          <p>
            Powered by{' '}
            <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">
              NewsAPI.org
            </a>
          </p>
        </div>
        <div className="footer-section social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
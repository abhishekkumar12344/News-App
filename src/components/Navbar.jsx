import { Link } from 'react-router-dom';

function Navbar() {
  const categories = ['Home', 'Politics', ' TECHNOLOGY', 'Sports', 'Entertainment', 'Business'];

  return (
    <nav className="navbar">
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={category === 'Home' ? '/' : `/category/${category.toLowerCase()}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
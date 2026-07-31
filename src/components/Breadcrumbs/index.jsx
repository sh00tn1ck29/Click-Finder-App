import { Link } from 'react-router-dom';

export const Breadcrumbs = () => {
  return (
    <nav className="crumbs stats__crumbs">
      <Link to="/" className="crumbs__link">
        Main page
      </Link>
      <span className="crumbs__sep">›</span>
      <span className="crumbs__current">User statistics</span>
    </nav>
  );
};

export default Breadcrumbs;

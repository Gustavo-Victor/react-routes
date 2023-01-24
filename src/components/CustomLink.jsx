import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ href, children, handleClick }) {
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  console.log(isActive);

  // const path = window.location.pathname;
  // let styles = path == href ? 'active' : '';
  return (
    <Link onClick={handleClick} className={isActive ? "active" : ""} to={href}>
      {children}
    </Link>
  );
}

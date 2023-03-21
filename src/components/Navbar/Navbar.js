import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../Navbar/Navbar.css'
import icon from '../Navbar/logo.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      Vimarsh
        <img src={icon}  alt="icon"></img></Link>
        
      <ul>
        <CustomLink to="/prices">Coins</CustomLink>
        <CustomLink to="/news">News</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
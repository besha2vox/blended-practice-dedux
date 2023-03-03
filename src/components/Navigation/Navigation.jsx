import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #2e2e2e;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &.active {
    color: yellow;
    background-color: blue;
  }
`;

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/users">Users</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import PropTypes from 'prop-types';
import { FaHome, FaPencilAlt, FaCode } from 'react-icons/fa';

import { Link } from 'gatsby';
import { StyledNavigation } from './styledComponents';

const ListItem = ({ children, to }) => (
  <li className="nav__item">
    <Link className="nav__link" activeClassName="active" to={to}>
      {children}
    </Link>
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

const Header = () => (
  <header>
    <StyledNavigation>
      <input type="checkbox" className="nav__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>

      <div className="nav__background">&nbsp;</div>

      <nav className="nav__nav">
        <ul className="nav__list">
          <ListItem to="/">
            <span>
              <FaHome />
            </span>
            Home
          </ListItem>
          <ListItem to="/projects/">
            <span>
              <FaCode />
            </span>
            Projects
          </ListItem>
          <ListItem to="/blog/">
            <span>
              <FaPencilAlt />
            </span>
            Blog
          </ListItem>
        </ul>
      </nav>
    </StyledNavigation>
  </header>
);

export default Header;

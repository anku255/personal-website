/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import Header from './Header';
import GlobalStyles from '../theme/GlobalStyles';
import './layout.css';

const Layout = ({ children }) => {
  const themeContext = React.useContext(ThemeManagerContext);

  React.useEffect(() => themeContext.toggleDark(true), [themeContext]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

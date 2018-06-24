import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../scss/styles.scss';

const ListLink = props => (
  <li>
    <Link activeClassName="active" to={props.to}>
      {props.children}
    </Link>
  </li>
);

const Navigation = () => (
  <nav className="Navigation">
    <ul className="nav-list">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/blog/1">Blog</ListLink>
    </ul>
  </nav>
);

const Header = () => (
  <div className="Header">
    <Link className="logo-link" to="/">
      <div className="diamond" />
      <div className="name">Ankit Tiwari</div>
    </Link>
    <Navigation />
  </div>
);

const TemplateWrapper = ({ children, data }) => {
  return (
    <div className="">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'Ankit Tiwari - Full Stack Developer'
          },
          {
            name: 'keywords',
            content:
              'Ankit Tiwari, India, Full Stack Developer, gatsbyjs, gatsby, blog, frontend, reactjs, react, css, scss, sass'
          }
        ]}
      />
      <Header />
      <div className="content-container">{children()}</div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

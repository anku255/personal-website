import React from 'react';

import Link from 'gatsby-link';

export default ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map(tag => (
        <li key={tag} className="tag">
          <Link to={`/tags/${tag}`} className="tag__link">
            <span className="tag__text">{tag}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

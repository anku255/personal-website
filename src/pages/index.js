import React from 'react';

import avatar from '../images/avatar.png';
import Socials from '../layouts/socials';

const IndexPage = () => {
  return (
    <div className="front-page">
      <div className="card-wrap">
        <img src={avatar} alt="Avatar" />
        <div className="content">
          <div className="inner">
            <h2>Ankit Tiwari</h2>
            <h3>Full Stack Developer</h3>
            Passionate about anything programming related. Also interested in
            Astronomy, Cricket and Android.
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

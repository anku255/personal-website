import React from 'react';

import avatar from '../../public/static/avatar.png';
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            numquam assumenda eligendi earum fuga quibusdam reprehenderit
            eveniet incidunt, consequatur sed.
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

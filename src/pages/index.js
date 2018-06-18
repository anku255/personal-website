import React from 'react'

import Socials from '../layouts/socials'

const IndexPage = () => {
  return (
    <div className="front-page">
      <div className="card-wrap">
        <div className="image-wrap">
          <div className="mask">
            <div
              className="profile-image"
              // style={{ backgroundImage: `url(${profileImage})` }}
            >
              {' '}
            </div>
          </div>
        </div>
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
  )
}

export default IndexPage

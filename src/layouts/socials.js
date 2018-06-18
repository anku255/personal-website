import React from 'react'

import FaGithub from 'react-icons/lib/fa/github'
import FaCodepen from 'react-icons/lib/fa/codepen'
import FaTwiiter from 'react-icons/lib/fa/twitter'
import FaLinkedIn from 'react-icons/lib/fa/linkedin'
import FaEnvelope from 'react-icons/lib/fa/envelope'

const Socials = props => {
  const github = 'https://www.github.com/anku255'
  const linkedin = 'https://www.linkedin.com/in/anku255/'
  const codepen = 'https://codepen.io/anku255'
  const twitter = 'https://twitter.com/__anku__'
  const mailto = 'mailto:ankitt255@gmail.com'

  return (
    <div className="Socials">
      <ul className="social-icons">
        <li>
          <a href={github} target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={codepen} target="_blank">
            <FaCodepen />
          </a>
        </li>
        <li>
          <a href={twitter} target="_blank">
            <FaTwiiter />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank">
            <FaLinkedIn />
          </a>
        </li>
        <li>
          <a href={mailto}>
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials

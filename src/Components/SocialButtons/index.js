import React from 'react';
import styled, { css } from 'styled-components';
import { FaGithub, FaCodepen, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialButtonsContainer = styled.div`
  ${props =>
    props.vertical &&
    css`
      position: fixed;
      top: calc(100vh / 2);
      transform: translate(0, -50%);
      left: 2rem;
    `}

  ul {
    list-style: none;

    ${props =>
      props.horizontal &&
      css`
        display: flex;
        justify-content: center;
      `}
    li {
      ${props =>
        props.horizontal &&
        css`
          margin-right: 2rem;
        `}

      &:not(:last-child) {
        padding-bottom: 0.5rem;
      }
      a {
        all: unset;
      }
      svg {
        width: 3.2rem;
        height: 3.2rem;
        transition: all 0.2s;

        &:hover {
          transform: scale(1.5);
          fill: ${props => props.theme.cGreen};
        }
      }
    }
  }
`;

const SocialButtons = ({ horizontal, vertical }) => {
  const github = 'https://www.github.com/anku255';
  const linkedin = 'https://www.linkedin.com/in/anku255/';
  const codepen = 'https://codepen.io/anku255';
  const twitter = 'https://twitter.com/__anku__';
  const mailto = 'mailto:ankitt255@gmail.com';

  return (
    <SocialButtonsContainer className="social-buttons" horizontal={horizontal} vertical={vertical}>
      <ul>
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={codepen} target="_blank" rel="noopener noreferrer">
            <FaCodepen />
          </a>
        </li>
        <li>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={mailto}>
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </SocialButtonsContainer>
  );
};

export default SocialButtons;

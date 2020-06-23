import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import theme from '../../theme/theme';

const StyledLink = styled(AniLink)`
  position: fixed;
  top: 25%;
  width: 80px;
  height: 50%;
  transition: transform 0.7s cubic-bezier(0.7, 0, 0.25, 1) 0.25s, opacity 0.2s ease-out 0.75s;

  @media ${props => props.theme.device.sm} {
    display: none;
  }

  span {
    display: inline-block;
    color: ${props => props.theme.cBlack};
    position: absolute;
    white-space: nowrap;
    top: calc(50% - 15.5px);
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    opacity: 0;
    font-size: 2rem;
    line-height: 1.7em;
    transition: opacity 0.1s ease 0.125s, transform 0.3s cubic-bezier(0, 0, 0, 1) 0.125s;
  }

  &:hover {
    span {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  ${props =>
    props.direction === 'left' &&
    css`
      left: 0;

      span {
        left: calc(50%);
        transform: translate3d(-30px, 0, 0);
      }

      &:hover {
        em:before {
          transform: rotate(30deg);
        }

        em:after {
          transform: rotate(150deg);
        }
      }
    `};

  ${props =>
    props.direction === 'right' &&
    css`
      right: 0;

      span {
        right: calc(50%);
        transform: translate3d(30px, 0, 0);
      }

      &:hover {
        em:before {
          transform: rotate(-30deg);
        }

        em:after {
          transform: rotate(-150deg);
        }
      }
    `};
`;

const Chevron = styled.em`
  display: block;
  position: absolute;
  height: 3.6rem;
  width: 3.6rem;
  top: calc(50% - 18.5px);
  left: calc(50% - 18px);
  transition: transform 0.2s ease-out 0.2s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    background-color: ${props => props.theme.cBlack};
    transition: transform 0.16s ease-out;
    transform-origin: 50% 100% 0;
  }

  ${props =>
    props.direction === 'left' &&
    css`
      &:before {
        left: 0;
        top: -50%;
        transform: rotate(45deg);
      }

      &:after {
        left: 0;
        top: calc(-50% + -1px);
        transform: rotate(135deg);
      }
    `};

  ${props =>
    props.direction === 'right' &&
    css`
      &:before {
        right: 0;
        top: -50%;
        transform: rotate(-45deg);
      }

      &:after {
        right: 0;
        top: calc(-50% + -1px);
        transform: rotate(-135deg);
      }
    `};
`;

const ArrowLink = ({ to, label, position }) => (
  <StyledLink cover direction={position} duration={0.5} to={to} bg={theme.darkTheme.cLightNavy}>
    <span>{label}</span>
    <Chevron direction={position} />
  </StyledLink>
);

ArrowLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  position: PropTypes.string,
};

export default ArrowLink;

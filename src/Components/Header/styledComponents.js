import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: block;

  .nav__list {
    margin: 0;
  }

  .nav__checkbox {
    display: none;
  }

  .nav__button {
    background-color: white;
    height: 5rem;
    width: 5rem;
    position: fixed;
    top: 0.8rem;
    right: 2rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 0.5rem 2rem rgba(${props => props.theme.cBlack}, 0.3);
    text-align: center;
    cursor: pointer;
  }

  .nav__background {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    position: fixed;
    top: 1.3rem;
    z-index: 1000;
    background-image: ${props => `radial-gradient(${props.theme.cLightestNavy}, ${props.theme.cLightNavy})`};
    right: 2.5rem;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .nav__nav {
    height: 100vh;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .nav__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }

  .nav__item {
    margin: 1rem;
  }

  .nav__link {
    color: ${props => props.theme.cBlack};
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1.5rem 3rem;
      color: ${props => props.theme.cBlack};
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
      background-size: 220%;
      transition: all 0.4s;

      span {
        margin-right: 1rem;
        display: inline-block;
        transform: translateY(-3px);
      }

      &.active {
        background-position: 100%;
        color: ${props => props.theme.cGreen};
        transform: translateX(1rem);
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: ${props => props.theme.cGreen};
      transform: translateX(1rem);
    }
  }

  .nav__checkbox:checked ~ .nav__background {
    transform: scale(80);
  }

  .nav__checkbox:checked ~ .nav__nav {
    opacity: 1;
    width: 100%;
    z-index: 1500;
  }

  .nav__icon {
    position: relative;
    margin-top: 2.5rem;

    &,
    &::before,
    &::after {
      width: 2.2rem;
      height: 2px;
      background-color: #333;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  .nav__button:hover .nav__icon::before {
    top: -1rem;
  }

  .nav__button:hover .nav__icon::after {
    top: 1rem;
  }

  .nav__checkbox:checked + .nav__button .nav__icon {
    background-color: transparent;
  }

  .nav__checkbox:checked + .nav__button .nav__icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  .nav__checkbox:checked + .nav__button .nav__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

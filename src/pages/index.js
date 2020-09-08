import React from 'react';
import styled from 'styled-components';

import Layout from '../Components/layout';
import SEO from '../Components/seo';
import ArrowLink from '../Components/ArrowLink';
import HeroImage from '../images/hero.png';

const Container = styled.div`
  background-color: ${props => props.theme.cBackground};
  min-height: 100vh;
  z-index: -1000;

  @media ${props => props.theme.device.sm} {
    .social-buttons {
      display: none;
    }
  }
`;

const StyledHomePage = styled.div`
  display: flex;

  .intro {
    padding: 12rem 4rem;
    min-height: 100%;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;

    &__hello,
    &__tagline {
      font-size: 4rem;
      .emoji {
        width: 40px;
        height: 40px;
      }
    }

    &__hello {
      font-weight: 300;
      margin-bottom: 4rem;
      .wave-hand {
        display: inline-block;
        vertical-align: text-top;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('/emojis/wave.png');
        margin-left: 10px;
        cursor: pointer;
      }
    }

    &__tagline {
      margin-bottom: 4rem;
      font-size: 3.8rem;
      line-height: 1.4;
      font-weight: 300;
      .name {
        font-weight: 700;
      }
    }

    &__contact {
      font-size: 2rem;
      font-weight: 400;
      .emoji {
        &.pointer {
          display: inline-block;
          vertical-align: text-top;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          background-image: url('/emojis/pointright.png');
          width: 30px;
          height: 30px;
          margin: 0 5px;
          vertical-align: text-bottom;
        }
      }
      .highlight-link {
        transition: all 0.2s ease-in-out;
        font-weight: 400;
        text-decoration: none;
        display: inline-block;
        padding: 2px 3px;
        text-decoration: none;
        box-shadow: inset 0 -3px 0 ${props => props.theme.cBlue};
        &:hover {
          box-shadow: inset 0 -33px 0 0 ${props => props.theme.cBlue};
          color: white;
        }
      }
    }
  }

  .hero {
    width: 50%;
    display: flex;
    align-items: center;

    &__image {
      margin-top: 10rem;
      height: 40rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media ${props => props.theme.device.lg} {
    .intro {
      width: 100%;
      padding: 12rem 8rem;
    }

    .hero {
      @media ${props => props.theme.device.lg} {
        display: none;
      }
    }
  }

  @media ${props => props.theme.device.sm} {
    .intro {
      padding: 8rem 4rem;
      &__hello {
        font-size: 3.2rem;
      }

      &__tagline {
        font-size: 2.8rem;
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <StyledHomePage>
        <header className="intro">
          <h1 className="intro__hello">
            Hello!
            <span className="emoji wave-hand animated"></span>
          </h1>

          <h2 className="intro__tagline">
            I'm <span className="name">Ankit Tiwari</span>, a software engineer passionate about learning and building things. I love solving problems using my computer science skills.
          </h2>

          <h3 className="intro__contact">
            <span>Get in touch </span>
            <span className="emoji pointer"></span>
            <span>
              <a
                href="mailto:ankucodes@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="highlight-link"
              >
                ankucodes@gmail.com
              </a>
            </span>
          </h3>
        </header>

        <div className="hero">
          <div className="hero__image">
            <img src={HeroImage} alt="A guy looking at computer screens" />
          </div>
        </div>
      </StyledHomePage>
      <ArrowLink position="right" to="projects" label="Projects" />
    </Container>
  </Layout>
);

export default IndexPage;

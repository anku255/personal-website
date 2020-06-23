import React from 'react';
import styled from 'styled-components';

import ExternalIcon from './Icons/External';
import FolderIcon from './Icons/Folder';
import GithubIcon from './Icons/Github';

const StyledProjectInner = styled.div`
  box-shadow: 0 10px 30px -15px ${props => props.theme.cShadowNavy};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px ${props => props.theme.cShadowNavy};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: 3px;
  background-color: ${props => props.theme.cLightNavy};

  header {
    width: 100%;
  }
`;
const StyledProject = styled.div`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${props => props.theme.cGreen};
    }
  }
`;

const StyledProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledFolder = styled.div`
  color: ${props => props.theme.cGreen};
  svg {
    width: 40px;
    height: 40px;
  }
`;

const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${props => props.theme.cLightSlate};
`;
const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: 2.2rem;
  color: ${props => props.theme.cLightestSlate};
`;

const StyledProjectDescription = styled.div`
  -webkit-font-smoothing: antialiased;
  line-height: 1.25;
  font-weight: 400;
  font-size: 17px;
  color: ${props => props.theme.cLightSlate};
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    color: ${props => props.theme.cGreen};
    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.cGreen};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${props => props.theme.cgreen} !important;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${props => props.theme.cGreen};
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      opacity: 0.5;
    }
  }
`;

const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
  li {
    font-family: ${props => props.theme.fonts.SFMono};
    font-size: 1.2rem;
    color: ${props => props.theme.cSlate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const ProjectCard = ({ title, github, html, tech, url }) => (
  <StyledProject key={title}>
    <StyledProjectInner>
      <header>
        <StyledProjectHeader>
          <StyledFolder>
            <FolderIcon />
          </StyledFolder>
          <StyledProjectLinks>
            {github && (
              <StyledIconLink href={github} target="_blank" rel="nofollow noopener noreferrer" aria-label="GitHub Link">
                <GithubIcon />
              </StyledIconLink>
            )}
            {url && (
              <StyledIconLink href={url} target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
                <ExternalIcon />
              </StyledIconLink>
            )}
          </StyledProjectLinks>
        </StyledProjectHeader>
        <StyledProjectName>{title}</StyledProjectName>
        <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
      </header>
      <footer>
        {tech && (
          <StyledTechList>
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </StyledTechList>
        )}
      </footer>
    </StyledProjectInner>
  </StyledProject>
);

export default ProjectCard;

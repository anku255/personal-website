import React from 'react';
import styled from 'styled-components';

import SocialButtons from '../SocialButtons';

const StyledFooter = styled.footer`
  padding: 5rem 0;

  @media ${props => props.theme.device.sm} {
    padding: 2.5rem 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <SocialButtons horizontal />
  </StyledFooter>
);

export default Footer;

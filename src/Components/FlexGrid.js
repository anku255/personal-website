import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div(
  props => `
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	& > * {
		box-sizing: border-box;
		width: ${`calc((100% - 2 * ${props.noOfItems.xxl}*${props.gutter})/${props.noOfItems.xxl})`}!important;
		margin: ${`calc(${props.gutter})`};

		@media (max-width: ${props.theme.size.xl}) {
			width: ${`calc((100% -  2 *${props.noOfItems.xl}*${props.gutter})/${props.noOfItems.xl})`}!important;
		}

		@media (max-width: ${props.theme.size.lg}) {
			width: ${`calc((100% - 2 * ${props.noOfItems.lg}*${props.gutter})/${props.noOfItems.lg})`}!important;
		}

		@media (max-width: ${props.theme.size.md}) {
			width: ${`calc((100% - 2 * ${props.noOfItems.md}*${props.gutter})/${props.noOfItems.md})`}!important;
		}

		@media (max-width: ${props.theme.size.sm}) {
			width: ${`calc((100% - 2 * ${props.noOfItems.sm}*${props.gutter})/${props.noOfItems.sm})`}!important;
		}

		@media (max-width: ${props.theme.size.xs}) {
			width: ${`calc((100% - 2 * ${props.noOfItems.xs}*${props.gutter})/${props.noOfItems.xs})`}!important;
		}
	}
  `
);

const FlexGrid = ({ children, gutter, noOfItems }) => (
  <StyledGrid noOfItems={noOfItems} gutter={gutter}>
    {children}
  </StyledGrid>
);

FlexGrid.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.string,
  noOfItems: PropTypes.object,
};

FlexGrid.defaultProps = {
  noOfItems: {
    xxl: 4,
    xl: 3,
    lg: 3,
    md: 2,
    sm: 1,
    xs: 1,
  },
  gutter: '1rem',
};

export default FlexGrid;

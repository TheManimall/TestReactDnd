import React from 'react';
import PropTypes from 'prop-types';

import { BLOCK_HEIGHT, BLOCK_WIDTH } from "../constants";

const ConnectedLine = ({ prevLeft, prevTop, left, top }) => (
	<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
		<path d={`M${prevLeft + BLOCK_WIDTH} ${prevTop + BLOCK_HEIGHT} C ${prevLeft + BLOCK_WIDTH} ${top + BLOCK_HEIGHT}, ${left} ${prevTop + BLOCK_HEIGHT}, ${left} ${top + BLOCK_HEIGHT}`} stroke="black" fill="transparent" />
		<circle cx={prevLeft + BLOCK_WIDTH} cy={prevTop + BLOCK_HEIGHT} r="4" fill="blue"/>
		<circle cx={left} cy={top + BLOCK_HEIGHT} r="4" fill="red" />
	</svg>
);

ConnectedLine.propTypes = {
	prevLeft: PropTypes.number,
	prevTop: PropTypes.number,
	left: PropTypes.number,
	top: PropTypes.number,
}

export default ConnectedLine;

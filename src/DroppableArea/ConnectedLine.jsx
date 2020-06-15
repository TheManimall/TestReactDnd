import React from 'react';

import PropTypes from 'prop-types';

const ConnectedLine = ({ prevLeft, prevTop, left, top }) => (
	<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
		<path d={`M${prevLeft + 211} ${prevTop + 31} C ${prevLeft + 211} ${top + 31}, ${left} ${prevTop + 31}, ${left} ${top + 31}`} stroke="black"
		      fill="transparent" markerEnd={`url("#arrow")`}/>
		<circle cx={prevLeft + 211} cy={prevTop + 31} r="4" fill="blue"/>
		<circle cx={left} cy={top + 31} r="4" fill="red"/>
	</svg>
);

ConnectedLine.propTypes = {
	prevLeft: PropTypes.number,
	prevTop: PropTypes.number,
	left: PropTypes.number,
	top: PropTypes.number,
}

export default ConnectedLine;

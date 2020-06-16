import React, { Fragment } from 'react';
import { useDrop } from 'react-dnd'
import ConnectedLine from "./ConnectedLine";
import PropTypes from 'prop-types';

import { HELLO, EXCHANGE_RATE } from "../constants";

const DroppableArea = ({ data, onDrop }) => {
	const [, drop] = useDrop({
		accept: [HELLO, EXCHANGE_RATE],
		canDrop: () => data.length < 5,
		drop: (item, monitor) => {
			const { x , y } = monitor.getSourceClientOffset();

			onDrop({...item, id: `${Date.now()}`, top: y, left: x - 400 })
		},
	})

	return (
			<div ref={drop} className="droppable-area">
				{data.length > 0 &&
				data.map(({ id, top, left, name }, index) => {
					const prevItem = index > 0 ? data[index -1] : null;

					return(
					<Fragment key={id}>
						<div className="droppable-item" style={{ top, left }}>{name}</div>
						{prevItem &&
							<ConnectedLine
								prevLeft={prevItem.left}
								prevTop={prevItem.top}
								left={left}
								top={top}
							/>
						}
					</Fragment>
				)})
				}
			</div>
	)
};

DroppableArea.propTypes = {
	data: PropTypes.array,
	onDrop: PropTypes.func,
}

export default DroppableArea;

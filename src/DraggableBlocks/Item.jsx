import React from 'react';
import { useDrag } from 'react-dnd'

import PropTypes from 'prop-types';

const Item = ({ name, type, id }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name, type, id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0.3 : 1;

    return (
      <div className="draggable-item" ref={drag} style={{ opacity }}>{name}</div>
    )
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['EXCHANGE_RATE', 'HELLO']).isRequired,
    id: PropTypes.number.isRequired,
}

export default Item;

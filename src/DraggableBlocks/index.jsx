import React from 'react';
import Item from './Item';

import PropTypes from 'prop-types';

const bloksData = [{
    id: 0,
    name: 'Print \"Hello\"',
    type: 'HELLO',
}, {
    id: 1,
    name: 'Request exchange rate and print',
    type: 'EXCHANGE_RATE',
}];

const DraggableBlocks = ({ onProcess, onSave, onClear }) => (
  <div className="wrapper">
    <div className="draggable-blocks">
        {bloksData.map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              type={item.type}
            />
        ))}
      </div>
      <div className="buttons-container">
          <button className="process" onClick={onProcess}>Process</button>
          <button className="save" onClick={onSave}>Save</button>
          <button className="clear" onClick={onClear}>Clear</button>
      </div>
  </div>
);

DraggableBlocks.propTypes = {
  onProcess: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

export default DraggableBlocks;

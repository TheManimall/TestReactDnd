import React, { useCallback, useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import axios from 'axios';

import DraggableBlocks from "./DraggableBlocks";
import DroppableArea from "./DroppableArea";
import { HELLO, EXCHANGE_RATE } from "./constants";

import './App.css';

function App() {
  const [droppableItems, setDroppableItems] = useState([]);

  useEffect(() => {
    const initialItems = localStorage.getItem('droppableItems');

    if(initialItems) {
      setDroppableItems(JSON.parse(initialItems))
    }
  }, [])

  const handleDropItem = useCallback((item) => {
    setDroppableItems(state => [...state, item])
  }, [setDroppableItems])

  const getExchangeRate = useCallback(() => {
    return axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json')
      .then(({ data }) => (data[0].rate))
  }, [])

  const handleProcessClick = useCallback( async() => {
    for (const { type } of droppableItems) {
      if(type === HELLO) {
        console.log('Hello');
      } else if (type === EXCHANGE_RATE) {
        const exchangeRate = await getExchangeRate();
        console.log('Exchange rate UAH to USD:', exchangeRate)
      }
    }
  }, [droppableItems, getExchangeRate]);

  const handleSaveClick = useCallback(() => {
    localStorage.setItem('droppableItems', JSON.stringify(droppableItems));
  }, [droppableItems])

  const handleClearClick = useCallback(() => {
    setDroppableItems([]);
    localStorage.removeItem('droppableItems');
  }, [setDroppableItems])

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <DraggableBlocks
          onProcess={handleProcessClick}
          onSave={handleSaveClick}
          onClear={handleClearClick}
        />
        <DroppableArea data={droppableItems} onDrop={handleDropItem}/>
      </DndProvider>
    </div>
  );
}

export default App;

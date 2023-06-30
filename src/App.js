import './App.css';
import React, { useState } from 'react';
import { BarChartExample } from './BarChartExample.tsx';
import { LineChartExample } from './LineChartExample.tsx';
import { PieChartExample } from './PieChartExample.tsx';

function App() {
  const [selectedChart, setSelectedChart] = useState('line');

  const handleChartClick = (e) => {
    setSelectedChart(e.target.innerText);
  }
  const chartOptions = [{ id: 1, name: 'Line Graph' }, { id: 2, name: 'Bar Graph' }, { id: 3, name: 'Pie Graph' }];
  const chartList = chartOptions.map(option => {
    return <div key={option.id}><button onClick={handleChartClick.bind(option)}>{option.name}</button></div>;
  });

  let chartToRender;
  if(selectedChart === 'Line Graph'){
    chartToRender = <LineChartExample />
  } else if(selectedChart === 'Bar Graph') {
    chartToRender = <BarChartExample />
  } else {
    chartToRender = <PieChartExample />
  }

  return (
    <div className="App">
      <aside className="App-sidebar">
        {chartList}
      </aside>
      <main className="App-body">
        {chartToRender}
      </main>
    </div>
  );
}

export default App;

export const lineChartDataOptions = [
  {
    data: [54.2, 54, 56.8, 57.5, 59.3, 60.5, 60.9, 59.9, 58.7, 56], // https://www.tylervigen.com/spurious-correlations
    name: 'Per Capita Chicken Consumption',
    yLabel: 'Per Capita Chicken Consumption in lbs'
  },
  {
    data: [3.311, 3.4, 3.336, 3.521, 3.674, 3.67, 3.685, 3.656, 3.571, 3.307], // https://www.tylervigen.com/spurious-correlations
    name: 'Total US Crude Oil Imports',
    yLabel: 'Total Crude Oil Imports in Billions of Barrels'
  },
  {
    data: [3.09, 2.51, 3.29, 4.08, 3.76, 3.74, 3.86, 3.91, 3.7, 3.45],  // https://chart-studio.plotly.com/~Dreamshot/8146/average-daily-precipitation-in-new-york-city-per-capita-consumption-of-chicken-i/#/
    name: 'Average New York Daily Precipitation',
    yLabel: 'Average New York Daily Precipitation in mm'
  }
];

export const lineChartDates = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

export const barChartTimes = ['Childhood', 'High school', 'College', 'First job', 'First pregnancy', 'First year of first baby\'s life', 'Second pregnancy', 'Now'];

export const barChartLiquidData = [{
  name: 'Water',
  data: [6, 6, 6, 6, 8, 10, 8, 10],
  color: '#99CCCC'
}, {
  name: 'Milk',
  data: [8, 0, 0, 0, 0, 0],
  color: '#D3D3D3'
}, {
  name: 'Alcohol',
  data: [0, 0, 8, 8, 0, 3, 0, 3],
  color: '#FF9999'
}, {
  name: 'Coffee',
  data: [0, 1, 8, 10, 3, 10, 3, 10],
  color: '#C48A47'
}];

export const barChartFoodData = [{
  name: 'Chipotle',
  data: [0, 9, 9, 9, 0, 7, 0, 7],
  color: '#99CCCC'
}, {
  name: 'PB & J',
  data: [8, 8, 8, 8, 8, 8, 8, 8],
  color: '#D3D3D3'
}, {
  name: 'Beets',
  data: [0, 2, 3, 4, 5, 6, 7, 8],
  color: '#FF9999'
}, {
  name: 'Mac N Cheese',
  data: [3, 5, 9, 9, 6, 9, 6, 9],
  color: '#C48A47'
}];

export const youTubeData = [{
  name: 'Yard Trimming & Power Washing',
  y: 30,
  color: '#99CCCC'            
}, {
  name: 'Cleaning',
  y: 10,
  color: '#D3D3D3'
}, {
  name: 'Late Night Shows',
  y: 10,
  color: '#FF9999'
}, {
  name: 'Random YouTubers',
  y: 30,
  color: '#C48A47'
}, {
  name: 'Cake decorating',
  y: 20
}]
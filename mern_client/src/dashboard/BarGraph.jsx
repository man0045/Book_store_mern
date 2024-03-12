import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarGraph = () => {
  const data = [
    { name: 'Category 1', value: 10 },
    { name: 'Category 2', value: 20 },
    { name: 'Category 3', value: 15 },
    { name: 'Category 4', value: 25 },
  ];

  const colors = ['#82ca9d', '#8884d8', '#ffc658', '#ff7300', '#','#4331DE', '#047B08']; // Add more colors as needed

  return (
   <div className='shadow-2xl mt-8' >
    
    <BarChart width={950} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {colors.map((color, index) => (
        <Bar key={index} dataKey="value" fill={color} />
      ))}
    </BarChart>
   </div>
  );
};

export default BarGraph;

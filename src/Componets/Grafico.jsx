import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = ['#00C853', '#D50000'];

const Grafico = ({ dataObj }) => {
    if (!dataObj) return null;

    const data = Object.entries(dataObj)
        .filter(([key]) => key !== 'balance')
        .map(([key, value]) => ({
            name: key === 'income' ? 'Ingreso' : 'Gasto',
            value
        }));

    return (
        <PieChart width={420} height={250}>
            <Pie
                data={data}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                outerRadius={120}
                label={({ name, value }) => `${name}: $${value}`}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default Grafico;
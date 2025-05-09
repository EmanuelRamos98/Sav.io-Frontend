import React, { useMemo, useState } from 'react'
import { useCategories } from '../Hooks'
import DateRangePicker from './DateRangePicker'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const GraficoBarras = () => {
    const getDefaultRange = () => {
        const now = new Date()
        const start = new Date(now.getFullYear(), now.getMonth(), 1)
        const end = now

        return {
            startDate: start.toISOString().split('T')[0],
            endDate: end.toISOString().split('T')[0]
        }
    }

    const { startDate, endDate } = useMemo(getDefaultRange, [])
    const { categories, loading, error } = useCategories(startDate, endDate)

    const dataGrafico = useMemo(() => {
        if (!categories) return []
        return Object.entries(categories).map(([name, [valor]]) => ({
            name,
            valor: parseFloat(valor)
        }))
            .filter(item => item.valor < 0)
            .map(item => ({
                ...item,
                valor: Math.abs(item.valor)
            }))
    }, [categories])



    const colors = ['#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB', '#9966FF']
    return (
        <div style={{ width: 300, height: 250 }}>
            {loading ? <p>Cargando...</p> : error ? <p>Error</p> :
                <ResponsiveContainer>
                    <BarChart data={dataGrafico}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="valor">
                            {dataGrafico.map((_, index) => (
                                <Cell key={index} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

export default GraficoBarras
import React, { useEffect, useState } from 'react'

const getDefaultRange = () => {
    const now = new Date()
    const start = new Date(now.getFullYear(), now.getMonth(), 1)
    const end = now

    return {
        startDate: start.toISOString().split('T')[0],
        endDate: end.toISOString().split('T')[0]
    }
}

const DateRangePicker = ({ onChange }) => {
    const { startDate: defaultStart, endDate: defaultEnd } = getDefaultRange()
    const [startDate, setStartDate] = useState(defaultStart)
    const [endDate, setEndDate] = useState(defaultEnd)

    useEffect(() => {
        onChange(startDate, endDate)
    }, [startDate, endDate])

    return (
        <div className="flex gap-2 items-center">
            <label>Desde:</label>
            <input
                type="date"
                value={startDate || ''}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <label>Hasta:</label>
            <input
                type="date"
                value={endDate || ''}
                onChange={(e) => setEndDate(e.target.value)}
            />
        </div>
    )
}

export default DateRangePicker
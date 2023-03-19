import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { GetHistoryRatesResponse } from 'src/Infrastructure/Types/Currency'

export const HistoryChart = ({ data }: { data: GetHistoryRatesResponse }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ bottom: 50 }}>
                <XAxis angle={-45} dataKey="date" textAnchor="end" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="linear" dataKey="rate" stroke="#8884d8" dot={false} />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}

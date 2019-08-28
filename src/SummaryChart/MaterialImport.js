import React, { Component } from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts'
export default class MaterialImportChart extends Component{
    render() {
        return(
            <div>
                <BarChart width={500} height={250} data={this.props.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8"/>
                    <Bar dataKey="amount" fill="#82ca9d"/>
                </BarChart>
            </div>
        );
    }
}
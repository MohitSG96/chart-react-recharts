import React, { Component } from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid, Legend, LabelList } from 'recharts'

export default class MaterialDomestic extends Component {
    render(){
        return(
            <div width="500" height="250">
                <label>Material Domestic</label>
                <BarChart width={500} height={250} data={this.props.data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Legend />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8">
                        <LabelList dataKey=""/>
                    </Bar>
                    <Bar dataKey="amount" fill="#82ca9d" />
                </BarChart>
            </div>
        )
    }

    

}
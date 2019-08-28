import React, { Component } from 'react';
import SummaryChart from './SummaryChart/App'
import { PieChart, Pie, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

class App extends Component {

    data01 = [
        {
            "name": "Naveen Kumar",
            "value": 56
        },
        {
            "name": "Kaushik Paramar",
            "value": 1062
        },
        {
            "name": "Jitendra Kanojiya",
            "value": 1084
        },
        {
            "name": "Manan Gujjar",
            "value": 1088
        },
        {
            "name": "Ashish Upadhyay",
            "value": 29
        }
    ]

    data02 = [
        {
            "Number Of Days": "0-15",
            "Outstanding Invoices": 6731
        },
        {
            "Number Of Days": "15-30",
            "Outstanding Invoices": 2467
        },
        {
            "Number Of Days": "30-45",
            "Outstanding Invoices": 603
        },
        {
            "Number Of Days": "45-60",
            "Outstanding Invoices": 196
        }
    ]

    render() {



        return (
            <div>
                <SummaryChart />
                <label>User Summary Chart</label>
                <PieChart width={730} height={500}>
                    <Pie data={this.data01} dataKey="value" nameKey="name" fill="#8884d8" />
                    <Tooltip />

                </PieChart>
                <label>Aging Report Chart</label>
                <LineChart width={730} height={250} data={this.data02}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Number Of Days" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Outstanding Invoices" stroke="#8884d8" />
                </LineChart>
            </div>
        );
    }
}

export default App;

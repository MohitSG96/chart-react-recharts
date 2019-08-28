import React, { Component } from 'react';
import MaterialImportChart from './MaterialImport';
import PaymentHalol from './PaymentHalol';
import EmployeeHalol from './EmployeeReimbursementHalol';
import MaterialDomestic from './MaterialDomestic';

export default class SummaryChart extends Component {

    materialData = [
        {"name":"onhold", count: 0, amount: 0 },
        {"name":"outstanding", count: 11, amount: 0 },
        {"name":"parked", count: 1, amount: 0 },
        {"name":"posted",count: 0, amount: 0 },
        {"name":"received",count: 11, amount: 0 },
        {"name":"rejected",count: 0, amount: 0 }
    ]

    paymentsHalol = [
            {"name":"onhold",count: 3, amount: 2793972.71 },
            {"name":"outstanding", count: 2, amount: 0 },
            {"name":"parked", count: 2, amount: 0 },
            {"name":"posted",count: 2, amount: 229660 },
            {"name":"received",count: 7, amount: 3023632.71 },
            {"name":"rejected",count: 0, amount: 0 }
    ]

    employeeReimbursementHalol = [
            {"name":"onhold",count: 0, amount: 0 },
            {"name":"outstanding",count: 2805, amount: 0 },
            {"name":"parked",count: 1, amount: 0 },
            {"name":"posted",count: 0, amount: 0 },
            {"name":"received",count: 2805, amount: 0 },
            {"name":"rejected",count: 0, amount: 0 }
    ]

    materialDomestic = [
            {"name":"onhold",count: 0, amount: 0 },
            {"name":"outstanding",count: 2805, amount: 0 },
            {"name":"parked",count: 1, amount: 0 },
            {"name":"posted",count: 0, amount: 0 },
            {"name":"received",count: 2805, amount: 0 },
            {"name":"rejected",count: 0, amount: 0 }
    ]

    render() {
        return(
            <div>
                <h1>Summary Chart</h1>
                <MaterialImportChart data={this.materialData} />
                <PaymentHalol data={this.paymentsHalol} />
                <EmployeeHalol data={this.employeeReimbursementHalol} />
                <MaterialDomestic data={this.materialDomestic} />
            </div>
        );
    }
}
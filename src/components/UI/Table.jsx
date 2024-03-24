import React from 'react';
import {calculateInvestmentResults} from "../../util/investment.js";
import {formatter} from "../../util/investment.js";
import uuid from "react-uuid";
import {useSortElementsFields} from "../../util/useSortElementsFields.js";
import {titleList} from "../../data.js";

const Table = ({elements}) => {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = useSortElementsFields(elements);
    const annualData = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    });
    // console.log(annualData)
    return (
        <table id='result'>
            <thead>
                <tr>
                    {Object.values(titleList).map(title => (
                        <th key={title}>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {annualData.map((object, index) => (
                    <tr key={index}>{Object.values(object).map((value, index) => {
                        let td;
                        if(index === 0) {
                            td = <td key={uuid()}>{+value}</td>
                        } else {
                            td = <td key={uuid()}>{formatter.format(+value)}</td>
                        }
                        return td
                    })}</tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

import React from 'react'
import { Link } from 'react-router-dom'
import ScenarioAnalysis30 from './ScenarioAnalysis30'
import ScenarioAnalysisTwoPointFiveX from './ScenarioAnalysisTwoPointFiveX'
import ScenarioAnalysisFourX from './ScenarioAnalysisFourX'
import ScenarioAnalysisFiveX from './ScenarioAnalysisFiveX'
import ScenarioAnalysisRamsey from './ScenarioAnalysisRamsey'

const ScenarioBreakdown = ({ scenario }) => {
    const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
            const negativeSign = amount < 0 ? "-" : "";
            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;
            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <article className="post">
            <div className="title">
                <Link to={`/scenarios/`}>
                    <h5>Net Income: {scenario.net_income}</h5>
                    <h5>Income After Tax: {scenario.income_after_tax}</h5>
                    <h5>Monthly Debt: {scenario.monthly_debt}</h5>
                    <h5>Credit Score: {scenario.credit_score}</h5>
                    <h5>Downpayment: {scenario.downpayment}</h5>
                    <h5>City: {scenario.city}</h5>
                    <h5>State: {scenario.state}</h5>
                </Link>
                <br/>
                <article className="post"><h2>Rules are arranged from most to least frugal</h2></article>
                <article className="post"><ScenarioAnalysisRamsey formatMoney={formatMoney} scenario={scenario} /></article>
                <article className="post"><ScenarioAnalysisTwoPointFiveX formatMoney={formatMoney} scenario={scenario} /></article>
                <article className="post"><ScenarioAnalysisFourX formatMoney={formatMoney} scenario={scenario} /></article>
                <article className="post"><ScenarioAnalysisFiveX formatMoney={formatMoney} scenario={scenario} /></article>
                <article className="post"><ScenarioAnalysis30 formatMoney={formatMoney} scenario={scenario} /></article>
            </div>
        </article>
    )
}

export default ScenarioBreakdown
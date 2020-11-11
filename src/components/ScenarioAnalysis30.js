import React from 'react'

const ScenarioAnalysis30 = (props) => {
    const thirty = props.formatMoney(props.scenario.net_income*.3/12)
    const max = props.scenario.net_income*.3/12
    const loan_length_mo = props.scenario.mortg_interest_rate.loan_length_yrs*12
    const int_rate_mo = props.scenario.mortg_interest_rate.interest_rate/12
    const tax_rate = props.scenario.prop_tax_rate.tax_rate
    const home_price = (max)/(((int_rate_mo*((1+int_rate_mo)**loan_length_mo))/(((1+int_rate_mo)**loan_length_mo)-1))+(tax_rate/12))
    const mortg = home_price*((int_rate_mo*((1+int_rate_mo)**loan_length_mo))/(((1+int_rate_mo)**loan_length_mo)-1))
    const mortg_int = home_price*int_rate_mo
    const mortg_princ = mortg-mortg_int
    const prop_tax = home_price*tax_rate/12

    // M = P[r(1+r)^n/((1+r)^n)-1)]
    // M= the total monthly mortgage payment.
    // P= the principal loan amount.
    // r= your monthly interest rate (3%/12=.0025)
    // n= number of payments over the loan’s lifetime (30yr = 360)
    return (
        <>
            <h2>30% Rule Home Purchase Analysis</h2> 
            <h4>This rule states that no more than 30% of Gross Income should be used for 
                all housing costs (including mortgage, interest and property tax). This is also considered a US government standard.
                 Spending more than this means you are considered "housing-cost burdened" by the US Government</h4>
            <h4>Based on this rule we suggest the following:</h4>
            <p>
                Monthly expenses should not exceed: {"$"+thirty}<br/>
                Monthly Mortgage Interest: {"$"+props.formatMoney(mortg_int)} (This will go DOWN over the life of the loan)<br/>
                Monthly Mortgage Principal: {"$"+props.formatMoney(mortg_princ)} (This will go UP over the life of the loan)<br/>
                Monthly Total Mortgage: {"$"+props.formatMoney(mortg)}<br/>
                Assumed Annual Tax Rate for this State: {tax_rate*100+"%"}<br/>
                Monthly Property Tax: {"$"+props.formatMoney(prop_tax)}<br/>
                <strong>Monthly Total Mortgage and Tax: {"$"+props.formatMoney(max)}</strong><br/>
                <strong>Max Home Purchase Price: {"$"+props.formatMoney(home_price)}</strong>
            </p>
            <h4>Other costs to consider: <br/>
            PMI, Homeowner's Insurance, HOA Fees, Utilities Costs (Water, Electric, Gas)</h4>
        </>
    )
}

export default ScenarioAnalysis30
import React from 'react'

const ScenarioAnalysisRamsey = (props) => {
    const max = props.scenario.income_after_tax*.25/12
    const loan_length_mo = 15*12
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
            <h2>Ramsey Rule Home Purchase Analysis</h2> 
            <h4>This rule (popularized by Dave Ramsey) states that no more than 25% of Take Home (after tax) Income should be used for 
                all housing costs (including mortgage, interest and property tax). It also requires a 15 year mortgage and a 10% downpayment.</h4>
            <h4>Based on this rule we suggest the following:</h4>
            <p>
                Monthly expenses should not exceed: {"$"+props.formatMoney(max)}<br/>
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

export default ScenarioAnalysisRamsey
import React from 'react'

const ScenarioAnalysis30 = (props) => {
    const thirty = props.formatMoney(props.scenario.net_income*.3/12)
    const max = props.scenario.net_income*.3/12
    const loan_length_mo = props.scenario.mortg_interest_rate.loan_length_yrs*12
    const int_rate_mo = props.scenario.mortg_interest_rate.interest_rate/12
    const tax_rate = props.scenario.prop_tax_rate.tax_rate
    const home_price = props.formatMoney((max)/((int_rate_mo*((1+int_rate_mo)**loan_length_mo))/(((1+int_rate_mo)**loan_length_mo)-1)))
    const mortg = 25
    const mortg_int = 25
    const prop_tax = 25


    // 
    // P = M/[r(1+r)^n/((1+r)^n)-1)]
    // 
// M= the total monthly mortgage payment.
// P= the principal loan amount.
// r= your monthly interest rate (3%/12=.0025)
// n= number of payments over the loan’s lifetime (30yr = 360)
    return (
        <>
            <h2>30% Rule Home Purchase Analysis</h2> 
            <h4>This rule states that no more than 30% of Gross Income should be used for 
                all housing costs (including mortgage, interest and property tax). This is also considered a US government standard.</h4>
            <h4>Based on this rule we suggest the following:</h4>
            <p>
                Monthly expenses should not exceed: {"$"+thirty}<br/>
                Monthly Total Mortgage: {"$"+mortg}<br/>
                Monthly Mortgage Interest: {"$"+mortg_int}<br/>
                Monthly Property Tax: {"$"+prop_tax}<br/>
                Max Home Purchase Price: {"$"+home_price}
            </p>
            <h4>Other costs to consider: <br/>
            Homeowner's Insurance, HOA Fees, Utilities Costs (Water, Electric, Gas)</h4>
        </>
    )
}

export default ScenarioAnalysis30
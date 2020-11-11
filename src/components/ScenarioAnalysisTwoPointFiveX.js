import React from 'react'

const ScenarioAnalysisTwoPointFiveX = (props) => {
    const max_home_price = props.scenario.net_income*2.5
    const loan_length_mo = props.scenario.mortg_interest_rate.loan_length_yrs*12
    const int_rate_mo = props.scenario.mortg_interest_rate.interest_rate/12
    const tax_rate = props.scenario.prop_tax_rate.tax_rate
    const mortg = max_home_price*((int_rate_mo*((1+int_rate_mo)**loan_length_mo))/(((1+int_rate_mo)**loan_length_mo)-1))
    const mortg_int = max_home_price*int_rate_mo
    const mortg_princ = mortg-mortg_int
    const prop_tax = max_home_price*tax_rate/12

    // M = P[r(1+r)^n/((1+r)^n)-1)]
    // M= the total monthly mortgage payment.
    // P= the principal loan amount.
    // r= your monthly interest rate (3%/12=.0025)
    // n= number of payments over the loan’s lifetime (30yr = 360)
    return (
        <>
            <h2>2.5X Rule Home Purchase Analysis</h2> 
            <h4>This rule states that the home should cost no more than 2.5 times Gross Income. The rule is for people with some other debt
                 such as car payments, credit card debt, or student loans.
            </h4>
            <h4>Based on this rule we suggest the following:</h4>
            <p>
                Monthly Mortgage Interest: {"$"+props.formatMoney(mortg_int)} (This will go DOWN over the life of the loan)<br/>
                Monthly Mortgage Principal: {"$"+props.formatMoney(mortg_princ)} (This will go UP over the life of the loan)<br/>
                Monthly Total Mortgage: {"$"+props.formatMoney(mortg)}<br/>
                Assumed Annual Tax Rate for this State: {tax_rate*100+"%"}<br/>
                Monthly Property Tax: {"$"+props.formatMoney(prop_tax)}<br/>
                <strong>Monthly Total Mortgage and Tax: {"$"+props.formatMoney(mortg+prop_tax)}</strong><br/>
                <strong>Max Home Purchase Price: {"$"+props.formatMoney(max_home_price)}</strong>
            </p>
        </>
    )
}

export default ScenarioAnalysisTwoPointFiveX
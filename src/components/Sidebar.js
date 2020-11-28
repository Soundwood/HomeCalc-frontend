import React from 'react';
import SidebarIntro from './SidebarIntro'

const Sidebar = () => {
    return (
        <>
            <SidebarIntro/>
            <section>
                <div className="mini-posts">
                    <h3><a href="https://www.chase.com/personal/mortgage/calculators-resources/affordability-calculator">Chase Affordability Calculator</a></h3>
                    <p>This tool allows you to select a monthly payment amount and will calcualte the total mortgage amount.</p>
                    <h3><a href="https://www.realtor.com/mortgage/tools/affordability-calculator/">Realtor.com Affordability Calculator</a></h3>
                    <p>Similar to SMART HOME COST, calulates the total cost of a home that you can afford given some information about you.</p>
                    <h3><a href="https://www.realtor.com/mortgage/tools/mortgage-calculator/">Realtor.com Mortgage Payment Calculator</a></h3>
                    <p>A detailed look at monthly cost of home ownership given a home price and downpayment amount.</p>
                </div>
            </section>
        </>
    );
};

export default Sidebar;
import React from "react";

class Home extends React.Component {
    render() {
        return (
            <article className="post">
            <header>
                <div className="title">
                    <h2>What we're about</h2>
                    <p>An intelligent way to consider housing and cost</p>
                </div>
                <div className="meta">
                    <time className="published">November 8, 2020</time>
                    <span className="name">Soundwood</span>
                </div>
            </header>
            <a href="/scenarios" className="image featured"><img src="../img/Dream-Homes.jpg" alt="Dream Home"></img></a>
            <p>There is no end of information related to answering the question of "How much home can I afford?" What we're offering is a single
                 location to answer that question by giving clear answers ranging from most to least frugal.</p>
            <p>While we recognize that these scenarios are general rules and might not work for everyone,
                 we hope to give the user a better idea of where to start.</p>
            <p>Give us some information about yourself and allow us to use several "rule of thumb" calculations 
                to provide a reasonable home price given your specific scenario. Save multiple scenarios in multiple locations to compare
                 and contrast your different options. Happy hunting!</p>
            </article>
        )
    }
};

export default Home;
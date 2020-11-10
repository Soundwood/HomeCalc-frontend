import React from 'react'
import { connect } from 'react-redux'

class MyHomes extends React.Component {
    render() {
        return (
            <article className="post">
                This is the My Homes page
            </article>
        )
    }
}

export default connect(null, {})(MyHomes)
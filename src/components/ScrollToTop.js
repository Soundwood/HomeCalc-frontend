import React from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends React.Component {
    componentDidUpdate(prevprops) {
        if (this.props.location !== prevprops.location) {
            window.scrollTo(0,0)
        }
    }
    render () {
        return this.props.children
    }
}
export default withRouter(ScrollToTop)
import React, {Component} from 'react'

export default function accordion(component) {
	return class AccordionWrapp extends Component {
		
		state = {
	        openArticleId: null
	    }

		render() {
			return <Component {...this.props} {...this.state} />
		}

		toggleArticle = id => ev => {
		    this.setState({
		        openArticleId: id
		    })
		}
	}
}


import React from 'react'

export default function Accordion(Component) {
	return class AccordionWrapp extends React.Component {
		
		state = {
	        openArticleId: null
	    }

		render() {
			return <Component {...this.props} {...this.state} toggleArticle = {this.toggleArticle} />
		}

		toggleArticle = id => ev => {
			const {openArticleId} = this.state;
		    
		    console.log(openArticleId);


		    this.setState({
		        openArticleId: openArticleId == id ? null : id
		    })
		}
	}
}


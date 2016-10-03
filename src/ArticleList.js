import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'
import accordion from './decorators/accordion.js'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    /*state = {
        openArticleId: null
    }*/

    render() {
        const { articles } = this.props
        const { openArticleId } = this.state
        
        //if ()


        const articleComponents = articles.map(article => (

            <li key={article.id}>
                <Article article = {article}
                         isOpen = {article.id == openArticleId}
                         openArticle = {this.toggleArticle(article.id)}
                />
            </li>
            )
        )

        return (
            <div>
                <ul>
                    {articleComponents}
                </ul>
                <Chart />
            </div>
        )
    }

    /*toggleArticle = id => ev => {
        this.setState({
            openArticleId: id
        })
    }*/
}

export default accordion(ArticleList)
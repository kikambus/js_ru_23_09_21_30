import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'
import Accordion from './decorators/Accordion'



function ArticleList(props) {
    const { articles, openedArticleId, toggleOpen } = props
    //const { openArticleId } = this.state

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
        </div>
    )
}

ArticleList.propTypes = {
    article: PropTypes.array
}

export default Accordion(ArticleList);



/*class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array
    }

    render() {
        const { articles, openedArticleId, toggleOpen } = this.props
        const { openArticleId } = this.state
        
        

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
            </div>
        )
    }
}
*/

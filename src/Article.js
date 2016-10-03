import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    static defaultProps = {
        article: PropTypes.array // я что меняю тип проптайпса, что не меняю ни чего не происходит, где я провтыкал?
    }
    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    constructor(props) {
        super()
        this.state = {
            foo: 'bar'
        }
    }

    render() {
        const { article, isOpen, openArticle } = this.props
        const body = isOpen ? <section>{article.text}<CommentList comments = {article.comments} /></section> : null


        // <section style = {{display: isOpen ? 'block' : 'none'}}>{article.text}</section>
        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
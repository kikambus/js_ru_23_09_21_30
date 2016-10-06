import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from './../decorators/toggleOpen'

function CommentList(props) {
    const { comments, isOpen, toggleOpen } = props
    if (!comments || !comments.length) return <p>No comments yet</p>

    //const commentForm = {}

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
    const body = isOpen && <ul>{commentItems}</ul>
    const formComment = isOpen ?  <CommentForm /> : null

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{text}</a>
            {body}
            {formComment}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

export default toggleOpen(CommentList)
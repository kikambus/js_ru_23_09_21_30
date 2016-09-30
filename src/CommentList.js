import React, { Component } from 'react';
import CommentItem from './CommentItem.js';

export default class CommentList extends Component {
	
	state = {
		showComment: false
	}

	render() {
		const { commentList } = this.props;
		const { showComment } = this.state;

		let btnText = 'Show comments';
		let comments = null;
		//все хорошо, но стоит добавить проверку наличия комментов, иначе будет Exception
		if (showComment) {
			comments = commentList.map(comment => <li key={comment.id}><CommentItem comment = {comment} /></li>);
			btnText = 'Hide Comment Text';
		}

		return (
			<div>
				<div className="btn" onClick = {this.toggleOpen}><strong>{btnText}</strong></div>
				<ul>
					{comments}
				</ul>
			</div>
		)
	}

	toggleOpen = ev => {
        this.setState({
            showComment: !this.state.isOpen
        });
    }
}

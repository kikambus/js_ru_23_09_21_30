import React from 'react';

export default (props) => {
	const { comment } = props;

	return (
		<div className="comment-item">
			<div className="comment-user">{comment.user}</div>
			<div className="comment-text">{comment.text}</div>
		</div>
	)
}
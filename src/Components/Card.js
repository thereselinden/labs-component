import React from 'react';


export const Card = props => {
	return (
		<article className="question-wrapper">
			<p>Question {props.question}</p>
			<img src={props.image} alt="hello" />
		</article>
	);
};

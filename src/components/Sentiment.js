import React from 'react'

export default function Sentiment(props) {
	return (
		<>
			<div id="sentiment" style={props.sentimentColor}>
				<h1>Sentiment</h1>
				<div className='sentiment-wrapper'>
					<p id='response'>{props.response}</p>
					<p id='confidence'>{props.confidence}</p>
				</div>
			</div>
		</>
	)
}

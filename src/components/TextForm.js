import React, { useState } from 'react'
import Sentiment from './Sentiment';

export default function TextForm(props) {
	const [text, setText] = useState("");
	const [response, setResponse] = useState("...");
	const [confidence, setConfidence] = useState("...");
	const [sentimentColor, setSentimentColor] = useState({});

	const preProcess = (text) => {
		return text.replace(/\n/g, " ");
	}
	const handleOnChange = (event) => {
		setText(event.target.value);
	}
	return (
		<>
			<div className='textform'>
				<h2>{props.title}</h2>
				<textarea value={text} name="query" id="textForm" cols="60" rows="14" onChange={handleOnChange}></textarea>
				<button className="btn" onClick={handleClick}>{props.buttonText}</button>
			</div>
			<Sentiment response={response} confidence={confidence} sentimentColor={sentimentColor} />
		</>
	)
}

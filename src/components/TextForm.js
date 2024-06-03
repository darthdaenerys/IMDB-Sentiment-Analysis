import React, { useState } from 'react'
import Sentiment from './Sentiment';

export default function TextForm(props) {
	const [text, setText] = useState("");
	const [response, setResponse] = useState("...");
	const [confidence, setConfidence] = useState("...");
	const [sentimentColor, setSentimentColor] = useState({});

	const postProcess = (text) => {
		let [sentiment, value] = text.split(", ");
		value = parseFloat(value);
		sentiment = sentiment.replace(/"/g, '');
		return { sentiment, value };
	}
	const preProcess = (text) => {
		return text.replace(/\n/g, " ");
	}
	const handleClick = async () => {
		const button = document.querySelector('.btn');
		try {
			button.disabled = true;
			setResponse('...')
			setConfidence('...');
			const response = await fetch('http://localhost:5000/query', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ "query": preProcess(text) })
			});
			let json = await response.json();
		} catch (error) {
			console.log('There was an error', error);
		}
		finally {
			button.disabled = false;
		}
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

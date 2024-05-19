import React, { useState } from 'react'

export default function TextForm(props) {
	const [text, setText] = useState("");
	const handleOnChange = (event) => {
		setText(event.target.value);
	}
	return (
		<>
			<div className='textform'>
				<h2>{props.title}</h2>
				<textarea value={text} name="query" id="textForm" cols="60" rows="14" onChange={handleOnChange}></textarea>
			</div>
		</>
	)
}

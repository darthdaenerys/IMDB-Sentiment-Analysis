import React from 'react'

export default function Navbar(props) {
	return (
		<>
			<div id='navbar'>
				<i className="fa-solid fa-envelope-open-text"></i>
				<h2>{props.title}</h2>
			</div>
		</>
	)
}

import React from "react";

export default function IssueView() {
	const issue = JSON.parse(sessionStorage.getItem("issue"));

	console.log(issue);
	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Issue name:</label>
					<br />
					<input
						type="text"
						id="alert-name"
						value={issue.title}
						readOnly
					></input>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<input
						type="text"
						id="description"
						value={issue.description}
						readOnly
					></input>
				</div>
				<div className="war-input-field">
					<label>Send date:</label>
					<br />
					<input type="text" id="date" value={issue.date} readOnly></input>
				</div>
			</div>
		</div>
	);
}

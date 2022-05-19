import React from "react";

export default function IssueView() {
	const issue = JSON.parse(sessionStorage.getItem("issue"));
	let date = new Date(issue.creationDate);
	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Issue name:</label>
					<br />
					<input
						type="text"
						id="alert-name"
						value={issue.name}
						readOnly
					></input>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<textarea
						type="text"
						id="description"
						value={issue.description}
						readOnly
					/>
				</div>
				<div className="war-input-field">
					<label>Send date:</label>
					<br />
					<input
						type="text"
						id="date"
						value={
							date.getDate() +
							"/" +
							(date.getMonth() + 1) +
							"/" +
							date.getFullYear() +
							" " +
							date.getHours() +
							":" +
							date.getMinutes() +
							":" +
							date.getSeconds()
						}
						readOnly
					></input>
				</div>
			</div>
		</div>
	);
}

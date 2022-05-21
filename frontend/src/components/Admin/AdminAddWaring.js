import React from "react";
import { useState } from "react";
import axios from "axios";
export default function AdminAddWaring() {
	//get ip

	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));
	const [warning, setWarning] = useState({
		title: "",
		description: "",
		date: "",
		hours: "",
		degreeOfImportance: "CRITICAL",
	});

	let flushForm = () => {
		setWarning({
			title: "",
			description: "",
			date: "",
			hours: "",
			degreeOfImportance: "CRITICAL",
		});
	};

	let submitHandler = () => {
		console.log(warning);

		let particular = "/wh/internal/new-alert";
		let url = ip + particular;
		var config = {
			headers: { "X-Email": user.email },
		};
		// to do axios call

		let payload = {
			name: warning.title,
			description: warning.description,
			degreeOfImportance: warning.degreeOfImportance,
			occurrenceDate: warning.date + " " + warning.hours + ":00",
		};

		axios
			.post(url, payload, config)
			.then((response) => {
				alert(response.data.message);
				flushForm();
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Alert name:</label>
					<br />
					<input
						placeholder="Please type alert name"
						type="text"
						id="alert-name"
						value={warning.title}
						onChange={(e) => setWarning({ ...warning, title: e.target.value })}
					></input>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<textarea
						placeholder="Please type description"
						type="text"
						id="description"
						value={warning.description}
						onChange={(e) =>
							setWarning({ ...warning, description: e.target.value })
						}
					/>
				</div>
				<div className="war-input-field">
					<label>Date:</label>
					<br />
					<input
						placeholder="Please type date"
						type="date"
						id="date"
						value={warning.date}
						onChange={(e) => setWarning({ ...warning, date: e.target.value })}
					></input>
				</div>

				<div className="war-input-field">
					<label>Hour:</label>
					<br />
					<input
						placeholder="Please type date"
						type="time"
						id="hours"
						value={warning.hours}
						onChange={(e) => setWarning({ ...warning, hours: e.target.value })}
					></input>
				</div>

				<div className="war-input-field">
					<label>Importance degree:</label>
					<br />

					<select
						name="grade"
						id="grade"
						value={warning.degreeOfImportance}
						onChange={(e) =>
							setWarning({ ...warning, degreeOfImportance: e.target.value })
						}
					>
						<option value="CRITICAL">CRITICAL</option>
						<option value="IMPORTANT">IMPORTANT</option>
						<option value="UNIMPORTANT">UNIMPORTANT</option>
					</select>
				</div>
				<button
					className="submit-button"
					onClick={() => {
						submitHandler();
					}}
				>
					<strong>Add</strong>
				</button>
			</div>
		</div>
	);
}

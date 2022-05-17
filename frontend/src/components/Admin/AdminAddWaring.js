import React from "react";
import { useState } from "react";
import axios from "axios";
export default function AdminAddWaring() {
	//get ip

	const ip = sessionStorage.getItem("ip");
	const user = sessionStorage.getItem("user");
	const [warning, setWarning] = useState({
		title: "",
		description: "",
		date: "",
		grade: "",
	});

	let flushForm = () => {
		setWarning({ title: "", description: "", date: "", grade: "" });
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
			degreeOfImportance: warning.grade,
			occurrenceDate: warning.date,
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
					<input
						placeholder="Please type description"
						type="text"
						id="description"
						value={warning.description}
						onChange={(e) =>
							setWarning({ ...warning, description: e.target.value })
						}
					></input>
				</div>
				<div className="war-input-field">
					<label>Date:</label>
					<br />
					<input
						placeholder="Please type date"
						type="text"
						id="date"
						value={warning.date}
						onChange={(e) => setWarning({ ...warning, date: e.target.value })}
					></input>
				</div>
				<div className="war-input-field">
					<label>Importance grade:</label>
					<br />
					<input
						placeholder="Please type grade"
						type="text"
						id="grade"
						value={warning.grade}
						onChange={(e) => setWarning({ ...warning, grade: e.target.value })}
					></input>
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

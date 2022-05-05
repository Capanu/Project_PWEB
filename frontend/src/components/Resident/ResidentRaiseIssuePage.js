import { useState } from "react";
function ResidentRaiseIssuePage() {
	const ip = sessionStorage.getItem("ip");
	const user = sessionStorage.getItem("user");

	const [payload, setPayload] = useState({
		name: "",
		description: "",
		date: "",
	});
	let flushForm = () => {
		setPayload({ name: "", description: "", date: "" });
	};

	let submitHandler = () => {
		console.log(payload);

		// to do axios call

		flushForm();
	};

	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Issue name:</label>
					<br />
					<input
						type="text"
						id="name"
						placeholder="Please insert your Issue name here"
						value={payload.name}
						onChange={(e) => setPayload({ ...payload, name: e.target.value })}
					></input>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<input
						type="text"
						id="description"
						placeholder="Please insert your description here"
						value={payload.description}
						onChange={(e) =>
							setPayload({ ...payload, description: e.target.value })
						}
					></input>
				</div>

				<div className="war-input-field">
					<label>Send date:</label>
					<br />
					<input
						type="date"
						id="date"
						placeholder="Please insert your date here"
						value={payload.date}
						onChange={(e) => setPayload({ ...payload, date: e.target.value })}
					></input>
				</div>

				<button
					className="submit-button"
					onClick={() => {
						submitHandler();
					}}
				>
					<strong>Register!</strong>
				</button>
			</div>
		</div>
	);
}

export default ResidentRaiseIssuePage;

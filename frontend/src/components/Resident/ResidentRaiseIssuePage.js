import { useState } from "react";
import axios from "axios";
function ResidentRaiseIssuePage() {
	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));

	const [payload, setPayload] = useState({
		name: "",
		description: "",
	});
	let flushForm = () => {
		setPayload({ name: "", description: "" });
	};

	let submitHandler = () => {
		console.log(payload);

		// to do axios call

		let particular = "/wh/internal/new-issue";
		let url = ip + particular;
		var config = {
			headers: { "X-Email": user.email },
		};
		// to do axios call
		console.log(config);
		// GET request using axios inside useEffect React hook
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
					<textarea
						type="text"
						id="description"
						placeholder="Please insert your description here"
						value={payload.description}
						onChange={(e) =>
							setPayload({ ...payload, description: e.target.value })
						}
					/>
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

export default ResidentRaiseIssuePage;

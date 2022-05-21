import React from "react";
import axios from "axios";
import { useState } from "react";
export default function AdminAddVolunteersCampaign() {
	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));

	const [campaign, setCampaign] = useState({
		name: "",
		description: "",
		targetNumberOfVolunteers: "",
	});

	let flushForm = () => {
		setCampaign({ name: "", description: "", targetNumberOfVolunteers: "" });
	};

	let submitHandler = () => {
		console.log(campaign);

		// to do axios call

		// to do axios call
		let particular = "/wh/internal/new-volunteer-recruitment-campaign";
		let url = ip + particular;
		var config = {
			headers: { "X-Email": user.email },
		};

		// to do axios call

		// GET request using axios inside useEffect React hook
		axios
			.post(url, campaign, config)
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
					<label>Campaign name:</label>
					<br />
					<input
						placeholder="Please type Volunteer Campaign name"
						type="text"
						id="name-campaign"
						value={campaign.name}
						onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
					/>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<textarea
						placeholder="Please type description"
						type="text"
						id="description"
						value={campaign.description}
						onChange={(e) =>
							setCampaign({ ...campaign, description: e.target.value })
						}
					/>
				</div>

				<div className="war-input-field">
					<label>Target number of volunteers:</label>
					<br />
					<input
						placeholder="target number of volunteers"
						type="text"
						id="current-nr"
						value={campaign.targetNumberOfVolunteers}
						onChange={(e) =>
							setCampaign({
								...campaign,
								targetNumberOfVolunteers: e.target.value,
							})
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

import React from "react";
import { useState } from "react";
export default function AdminAddVolunteersCampaign() {
	const ip = sessionStorage.getItem("ip");

	const [campaign, setCampaign] = useState({
		name: "",
		description: "",
		targetNr: "",
	});

	let flushForm = () => {
		setCampaign({ name: "", description: "", targetNr: "" });
	};

	let submitHandler = () => {
		console.log(campaign);

		// to do axios call

		flushForm();
	};
	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Volunteer Campaing name:</label>
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
					<input
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
						value={campaign.targetNr}
						onChange={(e) =>
							setCampaign({ ...campaign, targetNr: e.target.value })
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

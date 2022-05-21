import React, { useEffect, useState } from "react";
import axios from "axios";
function VolunteerEnrollPage() {
	const campaign = JSON.parse(sessionStorage.getItem("volunteerCampaign"));
	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));
	let submitHandler = () => {
		console.log(campaign);

		// to do axios call
		let particular = "/wh/internal/enroll";
		let url = ip + particular;
		var config = {
			headers: { "X-Email": user.email },
		};
		let payload = {
			campaignId: campaign.id,
		};
		// to do axios call

		// GET request using axios inside useEffect React hook
		axios
			.post(url, payload, config)
			.then((response) => {
				alert(response.data.message);
				window.location = "/volunteerPage/volunteerCampaigns";
			})
			.catch((error) => {
				alert(error.response.data.message);
				console.log(error);
			});
	};

	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Campaign name:</label>
					<br />
					<input
						type="text"
						id="name-campaign"
						value={campaign.name}
						readOnly
					/>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<textarea
						type="text"
						id="description"
						value={campaign.description}
						readOnly
					/>
				</div>

				<div className="war-input-field">
					<label>Current number of volunteers:</label>
					<br />
					<input
						type="text"
						id="current-nr"
						value={campaign.currentNumberOfVolunteers}
						readOnly
					/>
				</div>
				<div className="war-input-field">
					<label>Target number of volunteers:</label>
					<br />
					<input
						type="text"
						id="current-nr"
						value={campaign.targetNumberOfVolunteers}
						readOnly
					/>
				</div>

				<button
					className="submit-button"
					onClick={() => {
						submitHandler();
					}}
				>
					<strong>Enroll</strong>
				</button>
			</div>
		</div>
	);
}

export default VolunteerEnrollPage;

function VolunteerEnrolledForm() {
	const campaign = JSON.parse(sessionStorage.getItem("volunteerCampaign"));

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
			</div>
		</div>
	);
}

export default VolunteerEnrolledForm;

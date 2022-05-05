function VolunteerEnrolledForm() {
	const campaign = JSON.parse(sessionStorage.getItem("volunteerCampaign"));

	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Campaing name:</label>
					<br />
					<input
						type="text"
						id="name-campaign"
						value={campaign.title}
						readOnly
					/>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<input
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
						value={campaign.currentNr}
						readOnly
					/>
				</div>
				<div className="war-input-field">
					<label>Tartge number of volunteers:</label>
					<br />
					<input
						type="text"
						id="current-nr"
						value={campaign.targetNr}
						readOnly
					/>
				</div>
			</div>
		</div>
	);
}

export default VolunteerEnrolledForm;

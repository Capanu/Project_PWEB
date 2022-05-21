import React from "react";

export default function ViewFundraisingCampaignPage() {
	let campaign = JSON.parse(sessionStorage.getItem("foundRaisngCampaign"));

	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Fundraising Campaign name:</label>
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
					<label>IBAN:</label>
					<br />
					<input type="text" id="current-nr" value={campaign.iban} readOnly />
				</div>

				<div className="war-input-field">
					<label>Target amount:</label>
					<br />
					<input
						type="text"
						id="current-nr"
						value={campaign.targetAmount}
						readOnly
					/>
				</div>
				<div className="war-input-field">
					<label>Current amount:</label>
					<br />
					<input
						type="text"
						id="current-nr"
						value={campaign.currentAmount}
						readOnly
					/>
				</div>
			</div>
		</div>
	);
}

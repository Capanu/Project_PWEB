import React from "react";
import { useState } from "react";
export default function AdminAddFoundraisingCampaign() {
	const ip = sessionStorage.getItem("ip");

	const [fundCampaign, setCampaign] = useState({
		name: "",
		description: "",
		targetAmount: "",
		targetAmount: "",
		iban: "",
	});

	let flushForm = () => {
		setCampaign({
			name: "",
			description: "",
			targetAmount: "",
			targetAmount: "",
			iban: "",
		});
	};

	let submitHandler = () => {
		console.log(fundCampaign);

		// to do axios call

		flushForm();
	};
	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Foundraising Campaing name:</label>
					<br />
					<input
						placeholder="Please  enter name of foundraising campaign"
						type="text"
						id="name"
						value={fundCampaign.name}
						onChange={(e) =>
							setCampaign({ ...fundCampaign, name: e.target.value })
						}
					/>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<input
						placeholder="Please  enter description"
						type="text"
						id="description"
						value={fundCampaign.description}
						onChange={(e) =>
							setCampaign({ ...fundCampaign, description: e.target.value })
						}
					/>
				</div>

				<div className="war-input-field">
					<label>Iban:</label>
					<br />
					<input
						placeholder="Please  enter Iban"
						type="text"
						id="iban"
						value={fundCampaign.iban}
						onChange={(e) =>
							setCampaign({ ...fundCampaign, iban: e.target.value })
						}
					/>
				</div>
				<div className="war-input-field">
					<label>Target amount:</label>
					<br />
					<input
						placeholder="Please  Target Amount"
						type="text"
						id="targetAmount"
						value={fundCampaign.targetAmount}
						onChange={(e) =>
							setCampaign({ ...fundCampaign, targetAmount: e.target.value })
						}
					/>
				</div>
				<button className="submit-button" onClick={submitHandler}>
					<strong>Add</strong>
				</button>
			</div>
		</div>
	);
}

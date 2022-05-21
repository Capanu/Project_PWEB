import React from "react";
import { useState } from "react";
import axios from "axios";
export default function AdminAddFoundraisingCampaign() {
	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));

	const [fundCampaign, setCampaign] = useState({
		name: "",
		description: "",
		targetAmount: "",
		iban: "",
	});

	let flushForm = () => {
		setCampaign({
			name: "",
			description: "",
			targetAmount: "",
			iban: "",
		});
	};

	let submitHandler = () => {
		console.log(user);

		// to do axios call
		let particular = "/wh/internal/new-fundraising-campaign";
		let url = ip + particular;
		var config = {
			headers: { "X-Email": user.email },
		};

		// to do axios call

		// GET request using axios inside useEffect React hook
		axios
			.post(url, fundCampaign, config)
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
					<label>Fundraising Campaign name:</label>
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
					<textarea
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
					<label>IBAN:</label>
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

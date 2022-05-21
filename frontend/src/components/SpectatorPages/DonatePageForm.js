import { useState } from "react";
import axios from "axios";
function DonatePageForm(props) {
	const ip = sessionStorage.getItem("ip");

	let campaign = JSON.parse(sessionStorage.getItem("foundRaisngCampaign"));
	const [donation, setDonation] = useState({
		name: campaign.name,
		description: campaign.description,
		currentAmount: campaign.currentAmount,
		targetAmount: campaign.targetAmount,
		firstName: "",
		lastName: "",
		email: "",
		cardCode: "",
		insertSum: "",
	});

	let flushForm = () => {
		setDonation({
			name: campaign.name,
			description: campaign.description,
			currentAmount: campaign.currentAmount,
			targetAmount: campaign.targetAmount,
			firstName: "",
			lastName: "",
			email: "",
			cardCode: "",
			insertSum: "",
		});
	};

	let submitHandler = () => {
		console.log(donation);
		let particular = "/wh/public/new-donation";
		let url = ip + particular;

		// to do axios call
		let payload = {
			campaignId: campaign.id,
			firstname: donation.firstName,
			lastname: donation.lastName,
			email: donation.email,
			cardCode: donation.cardCode,
			donatedAmount: donation.insertSum,
		};
		axios
			.post(url, payload)
			.then((response) => {
				alert(response.data.message);
				flushForm();
				window.location = "/donationPage";
			})
			.catch((error) => {
				alert(error.message);
			});

		flushForm();
	};

	return (
		<div className="donation-container">
			<div className="war-form-donation">
				<div className="donation-form">
					<div id="first-half">
						<div className="war-input-field-donation">
							<label>Name:</label>
							<br />
							<input
								type="text"
								id="name"
								value={campaign.name}
								onChange={(e) =>
									setDonation({ ...donation, name: e.target.value })
								}
								readOnly
							></input>
						</div>

						<div className="war-input-field-donation">
							<label>Description:</label>
							<br />
							<textarea
								type="text"
								id="description"
								value={campaign.description}
								onChange={(e) =>
									setDonation({ ...donation, description: e.target.value })
								}
								readOnly
							/>
						</div>

						<div className="war-input-field-donation">
							<label>Current amount:</label>
							<br />
							<input
								type="text"
								id="current-amount"
								value={campaign.currentAmount}
								onChange={(e) =>
									setDonation({ ...donation, currentAmount: e.target.value })
								}
								readOnly
							></input>
						</div>

						<div className="war-input-field-donation">
							<label>Target amount:</label>
							<br />
							<input
								type="text"
								id="target-amount"
								value={campaign.targetAmount}
								onChange={(e) =>
									setDonation({ ...donation, targetAmount: e.target.value })
								}
								readOnly
							></input>
						</div>
					</div>

					<div id="second-half">
						<div className="war-input-field-donation">
							<label>Firstname:</label>
							<br />
							<input
								type="text"
								id="first-name"
								value={donation.firstName}
								onChange={(e) =>
									setDonation({ ...donation, firstName: e.target.value })
								}
								placeholder="Firstname here please!"
							></input>
						</div>
						<div className="war-input-field-donation">
							<label>Lastname :</label>
							<br />
							<input
								type="text"
								id="last-name"
								placeholder="Lastname here please!"
								value={donation.lastName}
								onChange={(e) =>
									setDonation({ ...donation, lastName: e.target.value })
								}
							></input>
						</div>
						<div className="war-input-field-donation">
							<label>Email :</label>
							<br />
							<input
								type="text"
								id="email"
								placeholder="Email here please!"
								value={donation.email}
								onChange={(e) =>
									setDonation({ ...donation, email: e.target.value })
								}
							></input>
						</div>
						<div className="war-input-field-donation">
							<label>Card code:</label>
							<br />
							<input
								type="text"
								id="card-code"
								placeholder="Card code here please!"
								value={donation.cardCode}
								onChange={(e) =>
									setDonation({ ...donation, cardCode: e.target.value })
								}
							></input>
						</div>

						<div className="war-input-field-donation">
							<label>Insert Sum: </label>
							<br />
							<input
								type="text"
								id="sum"
								placeholder="Insert sum here please!"
								value={donation.insertSum}
								onChange={(e) =>
									setDonation({ ...donation, insertSum: e.target.value })
								}
							></input>
						</div>
					</div>
				</div>
				<button
					className="submit-button"
					onClick={() => {
						submitHandler();
					}}
				>
					<strong>Donate</strong>
				</button>
			</div>
		</div>
	);
}

export default DonatePageForm;

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import GreenCard from "../../microcomponents/GreenCard";
import ImportantCard from "../../microcomponents/ImportantCard";
import SemimportantCard from "../../microcomponents/SemimportantCard";
import "../../microcomponents/cssToolbox.css";
import { useEffect, useState } from "react";
import axios from "axios";
function VolunteerWarnings() {
	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));

	const [warnings, setWarning] = useState([]);
	useEffect(() => {
		let particular = "/wh/internal/alerts";
		let url = ip + particular;
		// to do axios call

		var config = {
			headers: { "X-Email": user.email },
		};
		// GET request using axios inside useEffect React hook
		axios
			.get(url, config)
			.then((response) => {
				setWarning(response.data);
			})
			.catch((error) => {
				alert(error.message);
			});
	}, []);

	const cards = warnings.map((campaign) => {
		if (campaign.degreeOfImportance.name === "UNIMPORTANT")
			return <GreenCard information={campaign} />;
		if (campaign.degreeOfImportance.name === "CRITICAL")
			return <ImportantCard information={campaign} />;
		if (campaign.degreeOfImportance.name === "IMPORTANT")
			return <SemimportantCard information={campaign} />;
	});
	return (
		<div id="volunteer-page">
			<Navbar style={{ background: "#1AC0C6" }} variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link
							href="/volunteerPage/volunteerCampaigns"
							style={{
								marginLeft: "-50%",
							}}
						>
							Volunteer Recuitment Campaings
						</Nav.Link>

						<Nav.Link href="/volunteerPage/warnings">
							Warnings and Alerts
						</Nav.Link>
						<Nav.Link href="/volunteerPage/enrolledVolunteerCampaigns">
							View enrolled campaigns
						</Nav.Link>
					</Nav>
					<Nav>
						<Button
							onClick={() => (window.location = "/")}
							style={{
								background: "#FDFA66",
								color: "black",
								marginLeft: "250%",
								borderRadius: "10px",
								borderColor: "#FDFA66",
								width: "100px",
							}}
						>
							Logout
						</Button>
					</Nav>
				</Container>
			</Navbar>

			<div className="warinigs-list">{cards}</div>
		</div>
	);
}

export default VolunteerWarnings;

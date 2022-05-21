import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../../microcomponents/cssToolbox.css";
import VolunteerCard from "../../microcomponents/VolunteerCard";
import { useEffect, useState } from "react";
import axios from "axios";
function VolunteerRecruitmentCampaigns() {
	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));

	const [campaigns, setCampaigns] = useState([]);
	useEffect(() => {
		let particular = "/wh/internal/volunteer-recruitment-campaigns";
		let url = ip + particular;
		// to do axios call

		var config = {
			headers: { "X-Email": user.email },
		};
		// GET request using axios inside useEffect React hook
		axios
			.get(url, config)
			.then((response) => {
				response.data.forEach((node) => (node.viewOrSend = 1));
				setCampaigns(response.data);
			})
			.catch((error) => {
				alert(error.message);
			});
	}, []);

	const cards = campaigns.map((campaign) => {
		return <VolunteerCard information={campaign} />;
	});
	return (
		<div id="campaigns-page">
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

export default VolunteerRecruitmentCampaigns;

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../../microcomponents/cssToolbox.css";
import VolunteerCard from "../../microcomponents/VolunteerCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
function ViewEnrolledCampaigns() {
	const ip = sessionStorage.getItem("ip");
	const user = sessionStorage.getItem("user");
	const [campaigns, setCampaigns] = useState([]);

	useEffect(() => {
		let particular = "/wh/internal/enrolled-campaigns";
		let url = ip + particular;
		var config = {
			headers: { "X-Email": user.email },
		};
		// to do axios call

		// GET request using axios inside useEffect React hook
		axios
			.get(url, config)
			.then((response) => {
				alert(response.data);
				setCampaigns(response.data);
				response.data.forEach((node) => (node.viewOrSend = 0));
			})
			.catch((error) => {
				alert(error.message);
			});
	}, []);

	const information = {
		title: "Volunteer Recruitment campaign name",
		description: "Some description",
		currentNr: "12",
		targetNr: "22",
		viewOrSend: 0,
	};

	//campaigns
	var arr = [];
	for (let i = 1; i <= 3; i++) {
		arr = [...arr, information];
	}

	const cards = arr.map((campaign) => {
		// instea arr, use campaigns
		return <VolunteerCard information={campaign} />;
	});
	return (
		<div id="campaigns-enrolled-page">
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
								marginLeft: "350%",
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

export default ViewEnrolledCampaigns;

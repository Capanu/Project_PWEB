import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import VolunteerCard from "../../microcomponents/VolunteerCard";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AdminVolunteerCampaigns() {
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

		console.log(config);
		axios
			.get(url, config)
			.then((response) => {
				response.data.forEach((node) => (node.isAdmin = 1));
				setCampaigns(response.data);
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

	var arr = [];
	for (let i = 1; i <= 13; i++) {
		arr = [...arr, information];
	}

	const cards = campaigns.map((campaign) => {
		return <VolunteerCard information={campaign} />;
	});

	return (
		<div id="admin-volunteer-campaigns-page">
			<Navbar style={{ background: "#1AC0C6" }} variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link
							href="/adminMainPage/foundraisingCampaigns"
							style={{
								marginLeft: "-40%",
							}}
						>
							Fundrasing Campaigns
						</Nav.Link>

						<Nav.Link href="/admin/volunteersCampaigns">
							Volunteer Recuitment Campaings
						</Nav.Link>
						<Nav.Link href="/admin/warnings">Warnings and Alerts</Nav.Link>
						<Nav.Link href="/admin/issues">Raised Issues</Nav.Link>
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
			<Button
				onClick={() => (window.location = "/admin/addVolunteersCampaigns")}
				style={{
					marginLeft: "80%",
					background: "red",
					color: "white",
					padding: "10px",
					marginBottom: "100px",
				}}
			>
				New Campaign
			</Button>
			<div className="donation-campaigns">{cards}</div>
		</div>
	);
}

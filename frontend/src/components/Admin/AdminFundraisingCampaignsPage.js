import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import FundrasingCard from "../../microcomponents/FundrasingCard";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AdminFundraisingCampaignsPage() {
	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));

	const [campaigns, setCampaigns] = useState([]);
	useEffect(() => {
		let particular = "/wh/public/fundraising-campaigns";
		let url = ip + particular;
		// to do axios call

		console.log(user);
		var config = {
			headers: { "X-Email": user.email },
		};

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

	const cards = campaigns.map((campaign) => {
		return <FundrasingCard information={campaign} />;
	});
	return (
		<div id="admin-found-campaigns-page">
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
				onClick={() => (window.location = "/admin/addFoundraisingCampaign")}
				style={{
					marginLeft: "1750px",
					background: "red",
					color: "white",
					padding: "10px",
					marginBottom: "10px",
					marginTop: "20px",
				}}
			>
				New Campaign
			</Button>
			<div className="donation-campaigns">{cards}</div>
		</div>
	);
}

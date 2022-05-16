import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import FundrasingCard from "../../microcomponents/FundrasingCard";
export default function AdminFundraisingCampaignsPage() {
	const ip = sessionStorage.getItem("ip");
	const user = sessionStorage.getItem("user");

	const information = {
		name: "Fundrasing campaign name!",
		description: "Some description",
		currentAmount: 12,
		targetAmount: 1000,
		isAdmin: 1,
		iban: 111111111,
	};

	var arr = [];
	for (let i = 1; i <= 13; i++) {
		arr = [...arr, information];
	}

	const cards = arr.map((campaign) => {
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

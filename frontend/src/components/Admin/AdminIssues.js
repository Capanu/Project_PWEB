import React from "react";
import RaisedIssue from "../../microcomponents/RaisedIssue";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
export default function AdminIssues() {
	const ip = sessionStorage.getItem("ip");
	const user = sessionStorage.getItem("user");

	const information = {
		title: "Cade apa ba!!",
		description: "Some description",
		date: "12-1-2022",
	};

	var arr = [];
	for (let i = 1; i <= 13; i++) {
		arr = [...arr, information];
	}

	const cards = arr.map((campaign) => {
		return <RaisedIssue information={campaign} />;
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
			<div className="donation-campaigns">{cards}</div>
		</div>
	);
}

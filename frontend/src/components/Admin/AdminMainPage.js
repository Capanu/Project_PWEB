import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
export default function AdminMainPage() {
	const ip = sessionStorage.getItem("ip");
	const user = sessionStorage.getItem("user");
	return (
		<div id="admin-main-page">
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
						<Nav.Link href="/admin/donorsPage">Show Donors</Nav.Link>
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
		</div>
	);
}

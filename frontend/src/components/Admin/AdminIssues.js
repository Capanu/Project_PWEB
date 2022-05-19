import React from "react";
import RaisedIssue from "../../microcomponents/RaisedIssue";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AdminIssues() {
	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));
	const [issues, setIssues] = useState([]);
	useEffect(() => {
		let particular = "/wh/internal/issues";
		let url = ip + particular;
		var config = {
			headers: { "X-Email": user.email },
		};
		// to do axios call

		// GET request using axios inside useEffect React hook
		axios
			.get(url, config)
			.then((response) => {
				setIssues(response.data);
			})
			.catch((error) => {
				alert(error.message);
			});
	}, []);

	const cards = issues.map((campaign) => {
		// use issues
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

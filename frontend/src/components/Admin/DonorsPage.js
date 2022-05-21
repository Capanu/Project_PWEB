import React from "react";
import { Navbar, Container, Nav, Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DonorsPage() {
	const ip = sessionStorage.getItem("ip");
	const user = JSON.parse(sessionStorage.getItem("user"));

	const [campaigns, setCampaigns] = useState([]);
	useEffect(() => {
		let particular = "/wh/internal/donations";
		let url = ip + particular;
		// to do axios call
		var config = {
			headers: { "X-Email": user.email },
		};
		console.log(config);
		axios
			.get(url, config)
			.then((response) => {
				setCampaigns(response.data);
			})
			.catch((error) => {
				alert(error.message);
			});
	}, []);

	var tableRows = campaigns.map((row) => {
		return (
			<tr>
				<td>{row.firstname}</td>
				<td>{row.lastname}</td>
				<td>{row.email}</td>
				<td>{row.donatedAmount}</td>
				<td>{row.fundraisingCampaign.name}</td>
			</tr>
		);
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

			<div className="donation-campaigns">
				<Table
					striped
					bordered
					hover
					variant="dark"
					style={{ width: "1500px" }}
				>
					<thead>
						<tr>
							<th style={{ width: "20%" }}>First Name</th>
							<th style={{ width: "20%" }}>Last Name</th>
							<th style={{ width: "20%" }}>Email</th>
							<th style={{ width: "20%" }}>Amount Donated</th>
							<th style={{ width: "20%" }}>Campaign name</th>
						</tr>
					</thead>
					<tbody>{tableRows}</tbody>
				</Table>
			</div>
		</div>
	);
}

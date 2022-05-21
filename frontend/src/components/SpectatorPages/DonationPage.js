import "../../microcomponents/cssToolbox.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import FundrasingCard from "../../microcomponents/FundrasingCard";

import { useEffect, useState } from "react";
import axios from "axios";
function DonationPage() {
	//get ip

	const ip = sessionStorage.getItem("ip");

	const [campaigns, setCampaigns] = useState([]);
	useEffect(() => {
		let particular = "/wh/public/fundraising-campaigns";
		let url = ip + particular;
		// to do axios call
		axios
			.get(url)
			.then((response) => {
				response.data.forEach((node) => (node.isAdmin = 0));
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
		<div id="donation-page">
			<Navbar style={{ background: "#1AC0C6" }} variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link
							href=""
							style={{
								marginLeft: "-400%",
							}}
						>
							Donate
						</Nav.Link>
					</Nav>
					<Nav>
						<Button
							onClick={() => (window.location = "/loginPage")}
							style={{
								background: "#FDFA66",
								color: "black",
								marginLeft: "150%",
								borderRadius: "10px",
								borderColor: "#FDFA66",
								width: "100px",
							}}
						>
							Login
						</Button>
						<Button
							onClick={() => (window.location = "/registerPage")}
							style={{
								background: "#FDFA66",
								color: "black",
								marginLeft: "20px",
								borderRadius: "10px",
								borderColor: "#FDFA66",
								width: "100px",
							}}
						>
							Register
						</Button>
					</Nav>
				</Container>
			</Navbar>

			<div className="donation-campaigns">{cards}</div>
		</div>
	);
}

export default DonationPage;

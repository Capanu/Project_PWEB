import { Navbar, Container, Nav, Button } from "react-bootstrap";
import GreenCard from "../../microcomponents/GreenCard";
import ImportantCard from "../../microcomponents/ImportantCard";
import SemimportantCard from "../../microcomponents/SemimportantCard";
import "../../microcomponents/cssToolbox.css";
import { useEffect, useState } from "react";
import axios from "axios";
function VolunteerWarnings() {
	const ip = sessionStorage.getItem("ip");
	const user = sessionStorage.getItem("user");

	const [warnings, setWarning] = useState([]);
	useEffect(() => {
		let particular = "/wh/internal/alerts";
		let url = ip + particular;
		// to do axios call

		var config = {
			headers: { "X-Email": user.email },
		};
		// GET request using axios inside useEffect React hook
		axios
			.get(url, config)
			.then((response) => {
				setWarning(response.data);
			})
			.catch((error) => {
				alert(error.message);
			});
	}, []);

	const information = {
		title: "Cade apa ba!!",
		description: "Some description",
		date: "12-1-2022",
		grade: "yellow",
	};

	const information1 = {
		title: "Arde focu ba!!",
		description: "Some description",
		date: "12-1-2022",
		grade: "green",
	};

	const information2 = {
		title: "Sare pe geam iarna!!!",
		description: "Some description",
		date: "12-1-2022",
		grade: "red",
	};

	var arr = [];
	for (let i = 1; i <= 13; i++) {
		arr = [...arr, information];
	}

	for (let i = 1; i <= 13; i++) {
		arr = [...arr, information1];
	}
	for (let i = 1; i <= 13; i++) {
		arr = [...arr, information2];
	}

	const cards = arr.map((campaign) => {
		if (campaign.grade === "UNIMPORTANT")
			return <GreenCard information={campaign} />;
		if (campaign.grade === "CRITICAL")
			return <ImportantCard information={campaign} />;
		if (campaign.grade === "IMPORTANT")
			return <SemimportantCard information={campaign} />;
	});
	return (
		<div id="volunteer-page">
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

export default VolunteerWarnings;

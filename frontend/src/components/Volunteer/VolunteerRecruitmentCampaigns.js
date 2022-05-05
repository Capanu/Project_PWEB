import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../../microcomponents/cssToolbox.css";
import VolunteerCard from "../../microcomponents/VolunteerCard";
function VolunteerRecruitmentCampaigns() {
	const ip = sessionStorage.getItem("ip");
	const user = sessionStorage.getItem("user");

	const information = {
		title: "Volunteer Recruitment campaign name",
		description: "Some description",
		currentNr: "12",
		targetNr: "22",
		viewOrSend: 1,
	};

	var arr = [];
	for (let i = 1; i <= 13; i++) {
		arr = [...arr, information];
	}

	const cards = arr.map((campaign) => {
		return <VolunteerCard information={campaign} />;
	});
	return (
		<div id="campaigns-page">
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

export default VolunteerRecruitmentCampaigns;

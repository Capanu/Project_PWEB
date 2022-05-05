import { Card, Button, CardGroup } from "react-bootstrap";
import "../microcomponents/cssToolbox.css";
function VolunteerCard(props) {
	const title = props == undefined ? "No ttitle" : props.information.title;
	const currentNr =
		props == undefined ? "No date" : props.information.currentNr;

	return (
		<Card
			style={{
				width: "10vw",
				background: "white",
				color: "black",
				borderRadius: "24px",
				borderColor: "#FACD60",
			}}
			className="box for-hover"
			onClick={() => {
				sessionStorage.setItem(
					"volunteerCampaign",
					JSON.stringify(props.information)
				);
				if (props.information.viewOrSend == 1)
					window.location = "/volunteerPage/volunteerCampaigns/enrollPage";
				if (props.information.viewOrSend == 0)
					window.location = "/volunteerPage/volunteerCampaigns/enrolledForm";
			}}
			key={Math.random()}
		>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<br />
				<br />
				<Card.Text>Current nr of voluteers {currentNr}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default VolunteerCard;

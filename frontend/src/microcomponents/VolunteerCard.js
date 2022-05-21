import { Card, Button, CardGroup } from "react-bootstrap";
import "../microcomponents/cssToolbox.css";
function VolunteerCard(props) {
	const title = props == undefined ? "No ttitle" : props.information.name;
	const currentNr =
		props == undefined
			? "No date"
			: props.information.currentNumberOfVolunteers;

	return (
		<Card
			style={{
				width: "12vw",
				height: "20vh",
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
				<Card.Text>Number of voluteers: {currentNr}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default VolunteerCard;

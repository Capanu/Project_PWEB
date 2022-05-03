import { Card, Button, CardGroup } from "react-bootstrap";
import "../microcomponents/cssToolbox.css";
function VolunteerCard(props) {
	const title = props == undefined ? "No ttitle" : props.information.title;
	const date = props == undefined ? "No date" : props.information.date;

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
		>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<br />
				<br />
				<Card.Text>{date}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default VolunteerCard;

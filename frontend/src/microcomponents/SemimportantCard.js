import { Card, Button, CardGroup } from "react-bootstrap";
import "../microcomponents/cssToolbox.css";
function SemimportantCard(props) {
	const title = props == undefined ? "No ttitle" : props.information.title;
	const date = props == undefined ? "No date" : props.information.date;

	return (
		<Card
			style={{
				width: "10vw",
				background: "#FDFA66",
				color: "black",
				borderRadius: "24px",
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

export default SemimportantCard;

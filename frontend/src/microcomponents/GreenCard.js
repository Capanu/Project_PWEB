import { Card, Button, CardGroup } from "react-bootstrap";
import "../microcomponents/cssToolbox.css";
function GreenCard(props) {
	const title = props == undefined ? "No ttitle" : props.information.title;
	const date = props == undefined ? "No date" : props.information.date;

	return (
		<Card
			style={{
				width: "10vw",
				background: "#05FF004D",
				color: "black",
				borderRadius: "24px",
			}}
			className="box for-hover"
			onClick={() => {
				sessionStorage.setItem("warning", JSON.stringify(props.information));
				window.location = "/warning";
			}}
			key={Math.random()}
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

export default GreenCard;

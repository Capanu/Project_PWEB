import { Card, Button, CardGroup } from "react-bootstrap";
import "../microcomponents/cssToolbox.css";
function GreenCard(props) {
	const title = props == undefined ? "No ttitle" : props.information.name;
	const date =
		props == undefined ? "No date" : new Date(props.information.occurrenceDate);

	return (
		<Card
			style={{
				width: "12vw",
				height: "20vh",
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
				<Card.Text>
					{"Date: " +
						date.getDate() +
						"-" +
						(date.getMonth() + 1) +
						"-" +
						date.getFullYear() +
						" " +
						date.getHours() +
						":" +
						date.getMinutes() +
						":" +
						date.getSeconds()}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default GreenCard;

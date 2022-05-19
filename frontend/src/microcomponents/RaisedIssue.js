import { Card, Button, CardGroup } from "react-bootstrap";
import "../microcomponents/cssToolbox.css";
function RaisedIssue(props) {
	const title = props == undefined ? "No ttitle" : props.information.name;
	const date =
		props == undefined ? "No date" : new Date(props.information.creationDate);

	return (
		<Card
			style={{
				width: "10vw",
				background: "white",
				color: "black",
				borderRadius: "24px",
				borderColor: "#E74645",
			}}
			className="box for-hover"
			onClick={() => {
				sessionStorage.setItem("issue", JSON.stringify(props.information));
				window.location = "/issue";
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
						"/" +
						(date.getMonth() + 1) +
						"/" +
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

export default RaisedIssue;

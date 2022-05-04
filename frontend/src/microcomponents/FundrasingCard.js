import { Card, Button, CardGroup } from "react-bootstrap";
import "../microcomponents/cssToolbox.css";
function FundrasingCard(props) {
	const name = props == undefined ? "No ttitle" : props.information.name;
	const amount =
		props == undefined ? "No date" : props.information.currentAmount;

	return (
		<Card
			style={{
				width: "10vw",
				background: "white",
				color: "black",
				borderRadius: "24px",
				borderColor: "#1AC0C6",
			}}
			className="box for-hover"
			onClick={() => {
				sessionStorage.setItem(
					"foundRaisngCampaign",
					JSON.stringify(props.information)
				);
				window.location = "/donationPage/foundRaisingCampaing";
			}}
			key={Math.random()}
		>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<br />
				<br />
				<Card.Text>{amount}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default FundrasingCard;

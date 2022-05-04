import "../../microcomponents/cssToolbox.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import FundrasingCard from "../../microcomponents/FundrasingCard";
function DonationPage() {
	//get ip
	const information = {
		name: "Fundrasing campaign name!",
		description: "Some description",
		currentAmount: 12,
		targetAmount: 1000,
	};

	var arr = [];
	for (let i = 1; i <= 4; i++) {
		arr = [...arr, information];
	}

	const cards = arr.map((campaign) => {
		return <FundrasingCard information={campaign} />;
	});
	const ip = sessionStorage.getItem("ip");
	return (
		<div id="donation-page">
			<Navbar style={{ background: "#1AC0C6" }} variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link
							href=""
							style={{
								marginLeft: "-400%",
							}}
						>
							Donate
						</Nav.Link>
					</Nav>
					<Nav>
						<Button
							onClick={() => (window.location = "/loginPage")}
							style={{
								background: "#FDFA66",
								color: "black",
								marginLeft: "150%",
							}}
						>
							Login
						</Button>
						<Button
							onClick={() => (window.location = "/registerPage")}
							style={{
								background: "#FDFA66",
								color: "black",
								marginLeft: "20px",
							}}
						>
							Register
						</Button>
					</Nav>
				</Container>
			</Navbar>

			<div className="donation-campaigns">{cards}</div>
		</div>
	);
}

export default DonationPage;

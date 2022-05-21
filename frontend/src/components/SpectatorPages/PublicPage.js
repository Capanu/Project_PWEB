import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { env } from "../../env";
function PublicPage() {
	// set ip
	let ip;

	if (!env.REACT_APP_IP || !env.REACT_APP_PORT) {
		ip = "http://86.126.144.30:8075";
	} else {
		ip = "http://" + env.REACT_APP_IP + ":" + env.REACT_APP_PORT;
		console.log(ip);
	}

	console.log(ip);
	sessionStorage.setItem("ip", ip);

	return (
		<div id="public-page " className="war-img">
			<Navbar style={{ background: "#1AC0C6" }} variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link
							href="donationPage"
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
								borderRadius: "10px",
								borderColor: "#FDFA66",
								width: "100px",
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
								borderRadius: "10px",
								borderColor: "#FDFA66",
								width: "100px",
								marginLeft: "20px",
							}}
						>
							Register
						</Button>
					</Nav>
				</Container>
			</Navbar>

			<div className="war-img"></div>
		</div>
	);
}

export default PublicPage;

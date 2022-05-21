import { Navbar, Container, Nav, Button } from "react-bootstrap";

function ResidentMainPage() {
	// set ip
	const ip = sessionStorage.getItem("ip");
	const user = sessionStorage.getItem("user");
	return (
		<div id="resident-page">
			<Navbar style={{ background: "#1AC0C6" }} variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link
							href="/residentPage/warnings"
							style={{
								marginLeft: "-120%",
							}}
						>
							Warnings and Alerts
						</Nav.Link>

						<Nav.Link href="/residentPage/raiseIssue">Raise Issue</Nav.Link>
					</Nav>
					<Nav>
						<Button
							onClick={() => (window.location = "/")}
							style={{
								background: "#FDFA66",
								color: "black",
								marginLeft: "250%",
								borderRadius: "10px",
								borderColor: "#FDFA66",
								width: "100px",
							}}
						>
							Logout
						</Button>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default ResidentMainPage;

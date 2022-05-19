import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { env } from "../../env";
function PublicPage() {
	// set ip
	let ip;

	if (!env.REACT_APP_IP || !env.REACT_APP_PORT) {
		ip = "http://86.126.144.30:8075";
	} else {
		ip = env.REACT_APP_IP + ":" + env.REACT_APP_PORT;
		console.log(ip);
	}

	console.log(ip);
	sessionStorage.setItem("ip", ip);

	return (
		<div id="public-page">
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

			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>
			<div style={{ backgroundColor: env.REACT_APP_COLOR, height: "100px" }}>
				<span>{env.REACT_APP_MAIN_TEXT}</span>
			</div>
		</div>
	);
}

export default PublicPage;

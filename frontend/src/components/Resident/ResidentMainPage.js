import { Navbar, Container, Nav, Button } from "react-bootstrap";
import LogoutButton from "../../microcomponents/LogoutButton";

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
						<LogoutButton />
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
		</div>
	);
}

export default ResidentMainPage;

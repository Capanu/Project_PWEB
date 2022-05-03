import { Navbar, Container, Nav, Button } from "react-bootstrap";
function NavbarSite() {
	return (
		<Navbar style={{ background: "#1AC0C6" }} variant="dark">
			<Container>
				<Nav className="me-auto">
					<Nav.Link
						href="#home"
						style={{
							marginLeft: "-400%",
						}}
					>
						Donate
					</Nav.Link>
				</Nav>
				<Nav>
					<Button
						style={{
							background: "#FDFA66",
							color: "black",
							marginLeft: "150%",
						}}
					>
						Login
					</Button>
					<Button
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
	);
}

export default NavbarSite;

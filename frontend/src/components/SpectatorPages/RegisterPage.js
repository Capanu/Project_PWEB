import "../../microcomponents/cssToolbox.css";
import { useState } from "react";
import axios from "axios";
function RegisterPage() {
	//get ip
	const ip = sessionStorage.getItem("ip");

	const [user, setUser] = useState({
		email: "",
		password: "",
		role: "RESIDENT",
	});

	let flushForm = () => {
		setUser({ email: "", password: "", role: "RESIDENT" });
	};

	let submitHandler = () => {
		let particular = "/wh/public/register";
		let url = ip + particular;

		// to do axios call
		console.log(url);
		// GET request using axios inside useEffect React hook
		axios
			.post(url, user)
			.then((response) => {
				alert("Succesful registration!");
				flushForm();
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	};

	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Email:</label>
					<br />
					<input
						role="text"
						id="email"
						placeholder="Please insert your email here"
						value={user.email}
						onChange={(e) => setUser({ ...user, email: e.target.value })}
					></input>
				</div>

				<div className="war-input-field">
					<label>Password:</label>
					<br />
					<input
						role="text"
						id="password"
						placeholder="Please insert your password here"
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					></input>
				</div>

				<div className="war-input-field">
					<label>Account role:</label>
					<br />

					<select
						value={user.role}
						onChange={(e) => setUser({ ...user, role: e.target.value })}
					>
						<option value="RESIDENT">RESIDENT</option>
						<option value="VOLUNTEER">VOLUNTEER</option>
					</select>
				</div>

				<button
					className="submit-button"
					onClick={() => {
						submitHandler();
					}}
				>
					<strong>Register</strong>
				</button>
			</div>
		</div>
	);
}

export default RegisterPage;

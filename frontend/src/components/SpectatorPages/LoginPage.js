import "../../microcomponents/cssToolbox.css";
import React, { useState } from "react";
import axios from "axios";
function LoginPage() {
	//get ip
	const ip = sessionStorage.getItem("ip");

	const [user, setUser] = useState({ email: "", password: "" });

	let flushForm = () => {
		setUser({ email: "", password: "" });
	};

	let submitHandler = () => {
		console.log(user);

		let particular = "/wh/public/login";
		let url = ip + particular;

		// to do axios call

		axios
			.post(url, user)
			.then((response) => {
				sessionStorage.setItem("user", JSON.stringify(response.data));

				if (response.data.role === "RESIDENT") {
					window.location = "/residentPage";
				}
				if (response.data.role === "ADMIN") {
					window.location = "/adminMainPage";
				}
				if (response.data.role === "VOLUNTEER") {
					window.location = "/volunteerPage";
				}
				// flushForm();
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Email:</label>
					<br />
					<input
						type="text"
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
						type="text"
						id="password"
						placeholder="Please insert your password here"
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					></input>
				</div>

				<button
					className="submit-button"
					onClick={() => {
						submitHandler();
					}}
				>
					<strong>Log in!</strong>
				</button>
			</div>
		</div>
	);
}

export default LoginPage;

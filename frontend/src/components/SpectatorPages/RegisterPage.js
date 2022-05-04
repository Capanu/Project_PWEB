import "../../microcomponents/cssToolbox.css";
import { useState } from "react";

function RegisterPage() {
	//get ip
	const ip = sessionStorage.getItem("ip");

	const [user, setUser] = useState({ email: "", password: "", type: "" });

	let flushForm = () => {
		setUser({ email: "", password: "", type: "admin" });
	};

	let submitHandler = () => {
		console.log(user);

		// to do axios call

		flushForm();
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

				<div className="war-input-field">
					<label>Account type:</label>
					<br />

					<select
						name="cars"
						id="cars"
						value={user.type}
						onChange={(e) => setUser({ ...user, type: e.target.value })}
					>
						<option value="admin">Admin</option>
						<option value="resident">Resident</option>
						<option value="volunteer">Volunteer</option>
					</select>
				</div>

				<button
					className="submit-button"
					onClick={() => {
						submitHandler();
					}}
				>
					<strong>Register!</strong>
				</button>
			</div>
		</div>
	);
}

export default RegisterPage;

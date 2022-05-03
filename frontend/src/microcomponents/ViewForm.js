import "../microcomponents/cssToolbox.css";
function ViewForm() {
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
					></input>
				</div>

				<div className="war-input-field">
					<label>Password:</label>
					<br />
					<input
						type="text"
						id="password"
						placeholder="Please insert your password here"
					></input>
				</div>
			</div>
		</div>
	);
}

export default ViewForm;

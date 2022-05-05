function ResidentViewWarningPage() {
	//get ip
	const warning = JSON.parse(sessionStorage.getItem("warning"));

	console.log(warning);
	return (
		<div className="war-container">
			<div className="war-form">
				<div className="war-input-field">
					<label>Alert name:</label>
					<br />
					<input
						type="text"
						id="alert-name"
						value={warning.title}
						readOnly
					></input>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<input
						type="text"
						id="description"
						value={warning.description}
						readOnly
					></input>
				</div>
				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<input type="text" id="date" value={warning.date} readOnly></input>
				</div>
				<div className="war-input-field">
					<label>Importance grade:</label>
					<br />
					<input type="text" id="grade" value={warning.grade} readOnly></input>
				</div>
			</div>
		</div>
	);
}

export default ResidentViewWarningPage;

function ResidentViewWarningPage() {
	//get ip
	const warning = JSON.parse(sessionStorage.getItem("warning"));
	let date = new Date(warning.occurrenceDate);
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
						value={warning.name}
						readOnly
					></input>
				</div>

				<div className="war-input-field">
					<label>Description:</label>
					<br />
					<textarea
						type="text"
						id="description"
						value={warning.description}
						readOnly
					/>
				</div>
				<div className="war-input-field">
					<label>Occurrence Date:</label>
					<br />
					<input
						type="text"
						id="date"
						value={
							date.getDate() +
							"/" +
							(date.getMonth() + 1) +
							"/" +
							date.getFullYear() +
							" " +
							date.getHours() +
							":" +
							date.getMinutes() +
							":" +
							date.getSeconds()
						}
						readOnly
					></input>
				</div>
				<div className="war-input-field">
					<label>Importance grade:</label>
					<br />
					<input
						type="text"
						id="grade"
						value={warning.degreeOfImportance.name}
						readOnly
					></input>
				</div>
			</div>
		</div>
	);
}

export default ResidentViewWarningPage;

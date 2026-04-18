import "../styles/Main.css";

export default function () {
	return (
		<>
			<main className="main-container">
				<form className="ingredients-form">
					<input
						className="ingredients-input"
						type="text"
						placeholder="e.g. oregano"
						aria-label="Add ingredient"
					/>
					<button className="add-ingredients btn">+ Add ingredients</button>
				</form>
			</main>
		</>
	);
}

function App() {
	const handleClick = () => {
		console.log("I've been clicked")


	};




	return (
		<div>
			<button onClick={handleClick}>Add Animal</button>
		</div>
	);

}

export default App;
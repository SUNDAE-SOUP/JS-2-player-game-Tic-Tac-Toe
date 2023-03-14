let player = "X";
		let gameresult = false;
		let table = ["", "", "", "", "", "", "", "", ""];

		document.querySelectorAll("td").forEach(cell => {
			cell.addEventListener("click", () => {
				if (!gameresult && cell.innerHTML === "") {
					cell.innerHTML = player;
					table[cell.id] = player;

					let winner = Winner();
					if (winner !== "") {
						alert("Player " + winner + " wins!");
						gameresult = true;
					}

					player = player === "X" ? "O" : "X";
				}
			});
		});

		function Winner() {
			const winningCombinations = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];

			for (let i = 0; i < winningCombinations.length; i++) {
				let [a, b, c] = winningCombinations[i];
				if (table[a] !== "" && table[a] === table[b] && table[b] === table[c]) {
					return table[a];
				}
			}

			return "";
}
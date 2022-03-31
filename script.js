const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");
const cell7 = document.getElementById("cell7");
const cell8 = document.getElementById("cell8");
const cell9 = document.getElementById("cell9");

const cellX1 = document.getElementById("cellX1");
const cellX2 = document.getElementById("cellX2");
const cellX3 = document.getElementById("cellX3");
const cellX4 = document.getElementById("cellX4");
const cellX5 = document.getElementById("cellX5");
const cellX6 = document.getElementById("cellX6");
const cellX7 = document.getElementById("cellX7");
const cellX8 = document.getElementById("cellX8");
const cellX9 = document.getElementById("cellX9");

const cellO1 = document.getElementById("cellO1");
const cellO2 = document.getElementById("cellO2");
const cellO3 = document.getElementById("cellO3");
const cellO4 = document.getElementById("cellO4");
const cellO5 = document.getElementById("cellO5");
const cellO6 = document.getElementById("cellO6");
const cellO7 = document.getElementById("cellO7");
const cellO8 = document.getElementById("cellO8");
const cellO9 = document.getElementById("cellO9");

cellX1.style.visibility = "hidden";
cellX2.style.visibility = "hidden";
cellX3.style.visibility = "hidden";
cellX4.style.visibility = "hidden";
cellX5.style.visibility = "hidden";
cellX6.style.visibility = "hidden";
cellX7.style.visibility = "hidden";
cellX8.style.visibility = "hidden";
cellX9.style.visibility = "hidden";

cellO1.style.visibility = "hidden";
cellO2.style.visibility = "hidden";
cellO3.style.visibility = "hidden";
cellO4.style.visibility = "hidden";
cellO5.style.visibility = "hidden";
cellO6.style.visibility = "hidden";
cellO7.style.visibility = "hidden";
cellO8.style.visibility = "hidden";
cellO9.style.visibility = "hidden";

const playerTxt = document.getElementById("playerTxt");

playerTxt.innerHTML = "PLAYER 1";
playerTxt.style.color = "rgb(182, 228, 255)";

var currentPlayer = 1;

cell1.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX1.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER 2";
		playerTxt.style.color = "rgb(254, 255, 182)";
	} else if (currentPlayer == 2) {
		cellO1.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER 1";
		playerTxt.style.color = "rgb(182, 228, 255)";
	}
});

cell2.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX2.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER 2";
		playerTxt.style.color = "rgb(254, 255, 182)";
	} else if (currentPlayer == 2) {
		cellO2.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER 1";
		playerTxt.style.color = "rgb(182, 228, 255)";
	}
});

cell3.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX3.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER 2";
		playerTxt.style.color = "rgb(254, 255, 182)";
	} else if (currentPlayer == 2) {
		cellO3.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER 1";
		playerTxt.style.color = "rgb(182, 228, 255)";
	}
});

cell4.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX4.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER 2";
		playerTxt.style.color = "rgb(254, 255, 182)";
	} else if (currentPlayer == 2) {
		cellO4.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER 1";
		playerTxt.style.color = "rgb(182, 228, 255)";
	}
});

cell5.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX5.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER 2";
		playerTxt.style.color = "rgb(254, 255, 182)";
	} else if (currentPlayer == 2) {
		cellO5.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER 1";
		playerTxt.style.color = "rgb(182, 228, 255)";
	}
});

cell6.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX6.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER 2";
		playerTxt.style.color = "rgb(254, 255, 182)";
	} else if (currentPlayer == 2) {
		cellO6.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER 1";
		playerTxt.style.color = "rgb(182, 228, 255)";
	}
});

cell7.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX7.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER 2";
		playerTxt.style.color = "rgb(254, 255, 182)";
	} else if (currentPlayer == 2) {
		cellO7.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER 1";
		playerTxt.style.color = "rgb(182, 228, 255)";
	}
});

cell8.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX8.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER 2";
		playerTxt.style.color = "rgb(254, 255, 182)";
	} else if (currentPlayer == 2) {
		cellO8.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER 1";
		playerTxt.style.color = "rgb(182, 228, 255)";
	}
});

cell9.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX9.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER 2";
		playerTxt.style.color = "rgb(254, 255, 182)";
	} else if (currentPlayer == 2) {
		cellO9.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER 1";
		playerTxt.style.color = "rgb(182, 228, 255)";
	}
});

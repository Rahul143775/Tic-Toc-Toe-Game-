let user = true;
const message = document.querySelector("#meg");
const start = document.querySelector(".start");
const restart = document.querySelectorAll(".restart");
const boxes = document.querySelectorAll(".choice");
const msgContainer = document.querySelector(".msg-container");

const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
    [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

boxes.forEach(choice => {
    choice.addEventListener("click", () => handleMove(choice));
});

const handleMove = (choice) => {
    choice.innerText = user ? 'X' : 'O';
    choice.disabled = true;
    user = !user;
    checkWinner();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const pos1 = boxes[a].innerText;
        const pos2 = boxes[b].innerText;
        const pos3 = boxes[c].innerText;

        if (pos1 && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return;
        }
    }

    if ([...boxes].every(choice => choice.innerText !== "")) {
        message.innerText = "Match Draw";
        msgContainer.classList.remove("hide");
    }
};

const showWinner = (winner) => {
    message.innerText = `Congratulations! Winner is ${winner}`;
    boxes.forEach(choice => choice.disabled = true);
    msgContainer.classList.remove("hide");
};

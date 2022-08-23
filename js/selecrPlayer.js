const players = document.getElementsByClassName('playerBtn');
for (const player of players) {
    player.addEventListener('click', function (event) {
        const playerSelectBtn = event.target;
        const playerName = playerSelectBtn.parentNode.parentNode.children[0].innerText;
        setPlayerName(playerName, playerSelectBtn);
    })
}

document.getElementsByClassName('alretClose')[0].addEventListener('click', function () {
    alertMsgClose();
})

document.getElementById('alretClose').addEventListener('click', function () {
    alertMsgClose();
})

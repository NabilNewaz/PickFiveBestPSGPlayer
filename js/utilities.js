function getPlaayerName(elementId) {
    const playerName = document.getElementById(elementId).innerText;
    return playerName;
}

function alertMsgShow() {
    const element = document.getElementById('alertMsg');
    element.classList.remove('hidden');
}

function alertMsgClose() {
    const element = document.getElementById('alertMsg');
    element.classList.add('hidden');
}

function setPlayerName(playerName, btnId) {
    const playerNumber = document.querySelectorAll('#playerList li');
    console.log(playerNumber.length);
    if (playerNumber.length <= 4) {
        const msgElementt = document.getElementById('noPlayerListMsg');
        msgElementt.classList.add('hidden');
        const ul = document.getElementById('playerList');
        const li = document.createElement('li');
        li.innerText = playerName;
        ul.appendChild(li);
        const btnDisable = document.getElementById(btnId);
        btnDisable.classList.remove('buton-color', 'hover:bg-blue-900');
        btnDisable.classList.add('cursor-not-allowed', 'bg-gray-500');
        btnDisable.disabled = 'true';
    }
    else {
        alertMsgShow();
    }
}
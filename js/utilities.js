
function selectBtnDisable(btnId) {
    btnId.classList.remove('buton-color', 'hover:bg-blue-900');
    btnId.classList.add('cursor-not-allowed', 'bg-gray-500');
    btnId.disabled = 'true';
}

function setPlayerName(playerName, disableBtnId) {
    const playerNumber = document.querySelectorAll('#playerList li');
    if (playerNumber.length <= 4) {
        const msgElementt = document.getElementById('noPlayerListMsg');
        msgElementt.classList.add('hidden');
        const ul = document.getElementById('playerList');
        const li = document.createElement('li');
        li.innerText = playerName;
        ul.appendChild(li);
        selectBtnDisable(disableBtnId);
    }
    else {
        alertMsgShow('Already 5 Player Added! You Are Not Allow To Add More Player.');
    }
}

function alertMsgShow(alartMsg) {
    const element = document.getElementById('alertMsg');
    const alertMsgElement = document.getElementById('alartMsg');
    alertMsgElement.innerText = alartMsg;
    element.classList.remove('hidden');
}

function alertMsgClose() {
    const element = document.getElementById('alertMsg');
    element.classList.add('hidden');
}

function worngInputMsgShow() {
    const element = document.getElementById('worngInputMsg');
    element.classList.remove('hidden');
}

function worngInputMsgClose() {
    const element = document.getElementById('worngInputMsg');
    element.classList.add('hidden');
}

function getValueFromInputField(inputId) {
    const valueString = document.getElementById(inputId).value;
    if (!/\D/.test(valueString)) {
        const inputValue = parseFloat(valueString);
        return inputValue;
    }
    else {
        worngInputMsgShow();
    }
}

function getValueFromTextField(inputId) {
    const valueString = document.getElementById(inputId).innerText;
    const inputValue = parseFloat(valueString);
    return inputValue;
}

function setValueInTextField(inputId, newText) {
    let getField = document.getElementById(inputId);
    if (isNaN(newText)) {
        getField.innerText = '0000';
        worngInputMsgShow();
    }
    else if (newText === 0) {
        getField.innerText = '0000';
    }
    else {
        getField.innerText = newText;
        worngInputMsgClose();
    }
}
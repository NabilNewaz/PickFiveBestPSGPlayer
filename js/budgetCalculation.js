document.getElementById('calculateBtn').addEventListener('click', function () {
    const perPlayerCost = getValueFromInputField('perPlayer');
    const playerNumber = document.querySelectorAll('#playerList li');
    if (playerNumber.length <= 0 && !isNaN(perPlayerCost)) {
        alertMsgShow('You Have Not Selected Player Yet. Select The Player First.')
        worngInputMsgClose();
    }
    else {
        const totalPlayerCost = playerNumber.length * perPlayerCost;
        setValueInTextField('totalPlayerCost', totalPlayerCost);
    }
})

document.getElementById('totalCostBtn').addEventListener('click', function () {
    const totalPlayerCost = getValueFromTextField('totalPlayerCost');
    const managerCost = getValueFromInputField('managerCost');
    const coachCost = getValueFromInputField('coachCost');
    const playerNumber = document.querySelectorAll('#playerList li');
    if (playerNumber.length <= 0 && totalPlayerCost == 0) {
        alertMsgShow('You Have Not Selected Player Yet. Select The Player First.')
        worngInputMsgClose();
    }
    else if (playerNumber.length > 0 && totalPlayerCost == 0) {
        alertMsgShow('You Have Not Claculate Player Expenses Yet. First Calculte It.')
        worngInputMsgClose();
    }
    else {
        const totalCost = totalPlayerCost + managerCost + coachCost;
        setValueInTextField('totalCost', totalCost);
    }
})

document.getElementById('worrningClose').addEventListener('click', function () {
    worngInputMsgClose();
})
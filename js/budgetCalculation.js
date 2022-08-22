document.getElementById('calculateBtn').addEventListener('click',function(){
    const perPlayerCost = getValueFromInputField('perPlayer');
    const totalPlayerCost = 5*perPlayerCost;
    setValueInTextField('totalPlayerCost', totalPlayerCost);
    console.log(perPlayerCost);
})

document.getElementById('worrningClose').addEventListener('click', function () {
    worngInputMsgClose();
})
const divs = document.querySelector('.buttons');
const buttons = divs.querySelectorAll('div');
const huds = document.querySelectorAll('#hudOpts');

const ataquesHud = document.querySelectorAll(".at");
const trocasHud = document.querySelectorAll(".trocar .troca");
const itensHud = document.querySelectorAll(".opts");

let arr = [[ataquesHud], [trocasHud], [itensHud]]

let selectedHud = 0;
let selectedRow = 0;
let currentSelected = 0;
let buttonsSelected = true;

buttons[selectedRow].style.border = '2px solid rgb(169, 169, 169)';
huds[selectedHud].style.display = "flex"

function handleArrowKeys(event) {
    switch (event.code) {
        case 'ArrowUp':
            selectedRow = selectedRow > 0 ? selectedRow - 1 : 0;
            break;
        case 'ArrowDown':
            if (buttonsSelected) { selectedRow = selectedRow < buttons.length - 1 ? selectedRow + 1 : buttons.length - 1; }
            else { selectedRow = selectedRow < arr[selectedHud][0].length - 1 ? selectedRow + 1 : arr[selectedHud][0].length - 1; }
            break;
        case 'ArrowLeft':
            if (!buttonsSelected) {
                buttonsSelected = true;
                selectedRow = currentSelected;
                selectedHud = 0;
                huds.forEach(hud => hud.style.opacity = "0.5");
            }
            break;
        case 'Enter':
        case 'ArrowRight':
            if (buttonsSelected) {
                currentSelected = selectedRow;
                selectedHud = selectedRow;
                selectedRow = 0;
                huds[selectedHud].style.opacity = "1";
                buttonsSelected = false;
            }else{
                if(selectedHud == 0){
                    dano(selectedRow)
                }else if(selectedHud == 1){

                }else if(selectedHud == 2){
                    item(selectedRow)
                }
            }
            break;
        default:
            break;
    }

    if (buttonsSelected) {
        buttons.forEach(button => button.style.border = '2px solid transparent');
        buttons[selectedRow].style.border = '2px solid rgb(169, 169, 169)';
        huds.forEach(hud => hud.style.display = 'none');
        huds[selectedRow].style.display = "flex"
    } else {
        arr[selectedHud][0].forEach(button => button.style.border = '2px solid transparent');
        arr[selectedHud][0][selectedRow].style.border = '2px solid rgb(169, 169, 169)';
    }
}

document.addEventListener('keydown', handleArrowKeys);

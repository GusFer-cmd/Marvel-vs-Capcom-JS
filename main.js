function playSound (audioSelector) { //Function to play sound

    //seach for audio
    const element = document.querySelector(audioSelector);

    //Cases
    if (element && element.localName === 'audio') {
        element.play();
    } else {
        alert('Hero without name')
    }
}

//List of all slots
const listSlots = document.querySelectorAll('.slot');

let count = 0;

for (let count = 0; count < listSlots.length; count++) {
    
    
    const slot = listSlots[count]; //Slots positions
    const sound = slot.classList[1]; //Slot init
    const idSound = `#som_${sound}`; //Related sound with respective hero

    slot.onclick = function () { //Click play sound
        playSound(idSound);
    }

    slot.onkeydown = function (evento) { //Press "space" or "Enter" play sound
        if (evento.code === 'Space' || evento.code === 'Enter') {
            slot.classList.add('active');
        }
    }

    slot.onkeyup = function () { //Unpress button make the sound stop
        slot.classList.remove('active');
    }
}


let score = 0;
let unlockedObjects = [];
let isClickable = false;

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object) {
    if (isClickable) {
        if (!unlockedObjects.includes(object)) {
            unlockedObjects.push(object);
            document.getElementById(object).classList.add('unlocked');
            alert(`Congratulations! You've unlocked the ${object}!`);
        }
    } else {
        alert('Score is not enough to unlock!');
  }
}


function checkUnlockables() {
    if (score >= 3 && !unlockedObjects.includes('planet')) {
        isClickable = true;
        unlockObject('planet');
    }
    if (score >= 6 && !unlockedObjects.includes('rocket')) {
        isClickable = true;
        unlockObject('rocket');
    }
    if (score >= 9 && !unlockedObjects.includes('alien')) {
        isClickable = true;
        unlockObject('alien');

        let four = 0;
        four++;
        fourthElement(four);
    }
    
}

function fourthElement(count){

    if (count === 1){

        if (unlockedObjects.length ===3){

            const newIcon = document.createElement('div');
            newIcon.id = 'newIcon';
            newIcon.textContent = 'you win!❤️';
            newIcon.classList.add('space-object', 'clickableDiv', 'heart');
            newIcon.onclick = function () {
                alert('You clicked the new icon!');
            };
            document.body.appendChild(newIcon);
        }
    }
 
    

}

function toggleScale(clickedDiv) {
    if (isClickable === true){
       clickedDiv.classList.toggle('scaled');

  }
}
  
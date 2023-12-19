document.addEventListener("DOMContentLoaded", addButtonListeners);

const allButtons = document.getElementsByClassName("question");


function addButtonListeners() {
    const iconPlus = "./assets/images/icon-plus.svg";
    const iconMinus = "./assets/images/icon-minus.svg";

    /* setting click listeners programmatically */
    for (let button of allButtons) {
        button.addEventListener("click", questionClicked);
    }

    /* setting icons programmatically */
    let buttonIcons = document.getElementsByClassName("extend-icon");

    for (let buttonIcon of buttonIcons) {
        buttonIcon.src = iconPlus;
    }

    const allAnswers = document.getElementsByClassName("answer");
    for (let answer of allAnswers) {
        answer.style.display = 'none';
        answer.classList.remove('show'); // Remove the 'show' class
    }

    function questionClicked(event) {
        const buttonPressed = event.currentTarget;
        let wholeArticle = buttonPressed.parentNode;
        let articleAnswer = wholeArticle.getElementsByClassName("answer")[0];
        let articleIcon = wholeArticle.querySelector(".extend-icon");

        let currentDisplayOfAnswer = articleAnswer.classList.contains('show');

        if (!currentDisplayOfAnswer) {
            // Fading in the answer text
            articleAnswer.style.display = 'inline-block';
            
            setTimeout(() => {
                articleAnswer.classList.add('show'); // Add the 'show' class to trigger the transition
            }, 100); // Adjust the duration as needed
            

            // Rotating the icon
            articleIcon.style.transform = 'rotateY(-360deg)'; // Change rotation to counterclockwise
            articleIcon.src = iconMinus;
        } else {
            // Fading out the answer text
            articleAnswer.classList.remove('show'); // Remove the 'show' class to trigger the transition
            setTimeout(() => {
                articleAnswer.style.display = 'none';
            }, 50); // Adjust the duration as needed

            // Rotating the icon
            articleIcon.style.transform = 'rotateY(0deg)'; // Reset rotation
            articleIcon.src = iconPlus;
        }
    }
}

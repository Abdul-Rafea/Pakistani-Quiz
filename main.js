function refresh(){
    location.reload();
}
function goto(id){
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
        }
    else {
        console.warn('got(): element not found with id',id); 
    }
    }

function question1(){
    const element1 = document.getElementById('option-button-container');
    element1.style.display = 'flex';
    element1.style.animation = 'pop_in 100ms linear 1';
    const element2 = document.getElementById('quiz-overlay-buttons');
    element2.style.display = 'flex';
    element2.style.animation = 'pop_in 100ms linear 1'
    const element3 = document.getElementById('begin-quiz');
    element3.style.display = 'none';
    const element4 = document.getElementById('question-box');
    element4.style.animation = 'pop_in 100ms linear 1';
}
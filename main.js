let question_no = 0;
let marks_ovewrite= true;
let total_marks = 0;

function refresh(){
    location.reload();
}

function goto(id){
    const section = document.getElementById(id);
        section.scrollIntoView({
            behavior: 'smooth'
        });
}

function elements_in(){
    question_no++;
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

function question(){
    const element1 = document.getElementById('question-box-text');
    const element2 = document.getElementById('option-button1');
    const element3 = document.getElementById('option-button2');
    const element4 = document.getElementById('option-button3');
    const element5 = document.getElementById('option-button4');
    element1.style.display = 'flex';

  switch(question_no){
        case 1:
            element1.innerHTML = 'How many provinces does Pakistan have(officially)?';
            element2.innerHTML = '4';
            element3.innerHTML = '5';
            element4.innerHTML = '6';
            element5.innerHTML = '7';
            break;
        case 2:
            element1.innerHTML = 'Who was the PM(prime minister)of Pakistan from <b>2018 - 2022?</b>';
            element2.innerHTML = 'Nawaz Sharif';
            element3.innerHTML = 'Imran Khan';
            element4.innerHTML = 'Asif Zardari';
            element5.innerHTML = 'Bilawal Bhutto';
            break;
        case 3:
            element1.innerHTML = 'Who is chief Minister of Punjab as of <b>2025?</b>';
            element2.innerHTML = 'Imran Khan';
            element3.innerHTML = 'Maryam Nawaz';
            element4.innerHTML = 'Benazir Bhutto';
            element5.innerHTML = 'Shehbaz Sharif';
            break;
        case 4:
            element1.innerHTML = 'What are your chances of getting mugged in Karachi?';
            element2.innerHTML = '25%';
            element3.innerHTML = '60%';
            element4.innerHTML = '80%';
            element5.innerHTML = '99%';
            break;
        case 5:
            element1.innerHTML = 'What is the capital of Pakistan?'
            element2.innerHTML = 'Faisalabad';
            element3.innerHTML = 'Karachi';
            element4.innerHTML = 'Islamabad';
            element5.innerHTML = 'Lahore';
            break;
        case 6:
            element1.innerHTML = 'Is Pakistan an agrarian country?';
            element2.innerHTML = 'No';
            element3.innerHTML = 'Maybe';
            element4.innerHTML = 'Yes';
            element5.innerHTML = 'Was in the past';
            break;
        case 7:
            element1.innerHTML = 'Will Pakistan Political system ever be Fixed?';
            element2.innerHTML = 'Maybe';
            element3.innerHTML = 'Never';
            element4.innerHTML = 'Yes soon';
            element5.innerHTML = 'Yes but in future';
            break;
        case 8:
            element1.innerHTML = 'Which bus service is the best in Pakistan for traveling from city to city?';
            element2.innerHTML = 'Skyways';
            element3.innerHTML = 'Daewoo';
            element4.innerHTML = 'Bilal Travels';
            element5.innerHTML = 'Naizi Express';
            break;
        case 9:
            element1.innerHTML = 'What is the best university in Pakistan?';
            element2.innerHTML = 'FAST';
            element3.innerHTML = 'NUST';
            element4.innerHTML = 'COMSATS';
            element5.innerHTML = 'LUMS';
            break;
        case 10:
            element1.innerHTML = 'Best Pakistani Food?';
            element2.innerHTML = 'Biryani';
            element3.innerHTML = 'Samosa';
            element4.innerHTML = 'Naan';
            element5.innerHTML = 'Jalaybi';
    }
}

function quiz_start(){
    elements_in();
    question();
}

function next(y){
    marks_ovewrite = true;
    answer_reset();

    if (question_no==10){
        result();
    }
    else if (y==1){
        question_no++;
        question();
    }
    else {
        console.log("Error!")
    }
}

function option1(y){
    const element1 = document.getElementById('option-button1');
    const element2 = document.getElementById('option-button2');
    const element3 = document.getElementById('option-button3');
    const element4 = document.getElementById('option-button4');

    element1.style.border = '3px solid greenyellow';
    element1.style.boxShadow = '0 0 20px 2px greenyellow';
    element2.style.border = '3px solid red';
    element2.style.boxShadow = '0 0 20px 2px red';
    element3.style.border = '3px solid red';
    element3.style.boxShadow = '0 0 20px 2px red';
    element4.style.border = '3px solid red';
    element4.style.boxShadow = '0 0 20px 2px red';

    if (y==1 && marks_ovewrite==true){
        total_marks++;
        marks_ovewrite = false;
    }
}
function option2(y){
    const element1 = document.getElementById('option-button1');
    const element2 = document.getElementById('option-button2');
    const element3 = document.getElementById('option-button3');
    const element4 = document.getElementById('option-button4');

    element1.style.border = '3px solid red';
    element1.style.boxShadow = '0 0 20px 2px red';
    element2.style.border = '3px solid greenyelllow';
    element2.style.boxShadow = '0 0 20px 2px greenyellow';
    element3.style.border = '3px solid red';
    element3.style.boxShadow = '0 0 20px 2px red';
    element4.style.border = '3px solid red';
    element4.style.boxShadow = '0 0 20px 2px red';

    if (y==2 && marks_ovewrite==true){
        total_marks++;
        marks_ovewrite = false;
    }
}
function option3(y){
    const element1 = document.getElementById('option-button1');
    const element2 = document.getElementById('option-button2');
    const element3 = document.getElementById('option-button3');
    const element4 = document.getElementById('option-button4');
    
    element1.style.border = '3px solid red';
    element1.style.boxShadow = '0 0 20px 2px red';
    element2.style.border = '3px solid red';
    element2.style.boxShadow = '0 0 20px 2px red';
    element3.style.border = '3px solid greenyellow';
    element3.style.boxShadow = '0 0 20px 2px greenyellow';
    element4.style.border = '3px solid red';
    element4.style.boxShadow = '0 0 20px 2px red';
    
    if (y==3 && marks_ovewrite==true){
        total_marks++;
        marks_ovewrite = false;
    }
}
function option4(y){
    const element1 = document.getElementById('option-button1');
    const element2 = document.getElementById('option-button2');
    const element3 = document.getElementById('option-button3');
    const element4 = document.getElementById('option-button4');
    
    element1.style.border = '3px solid red';
    element1.style.boxShadow = '0 0 20px 2px red';
    element2.style.border = '3px solid red';
    element2.style.boxShadow = '0 0 20px 2px red';
    element3.style.border = '3px solid red';
    element3.style.boxShadow = '0 0 20px 2px red';
    element4.style.border = '3px solid greenyellow';
    element4.style.boxShadow = '0 0 20px 2px greenyellow';
    
    if (y==4 && marks_ovewrite==true){
        total_marks++;
        marks_ovewrite = false;
    }
}

function answer(y){
    switch(question_no){
        case 1:
           option1(y);
            break;
        case 2:
            option2(y);
            break;
        case 3:
            option2(y);
            break;
        case 4:
            option4(y);
            break;
        case 5:
           option3(y);
            break;
        case 6:
            option3(y);
            break;
        case 7:
            option2(y);
            break;
        case 8:
            option2(y);
            break;
        case 9:
            option3(y);
            break;
        case 10:
            option3(y);
}
}

function answer_reset(){
    const element1 = document.getElementById('option-button1');
    const element2 = document.getElementById('option-button2');
    const element3 = document.getElementById('option-button3');
    const element4 = document.getElementById('option-button4');

    element1.style.border = 'none';
    element1.style.boxShadow = '0 0 20px 2px #1e1e1e';
    element2.style.border = 'none';
    element2.style.boxShadow = '0 0 20px 2px #1e1e1e';
    element3.style.border = 'none';
    element3.style.boxShadow = '0 0 20px 2px #1e1e1e';
    element4.style.border = 'none';
    element4.style.boxShadow = '0 0 20px 2px #1e1e1e';
}

function result(){
const element1 = document.getElementById('question-box-text');
const element2 = document.getElementById('next');
const element3 = document.getElementById('option-button-container');

let result = total_marks;
let msg = "";

    if (result>=5){
        msg = "You Passed";        
    }
    else{
        msg = 'You Failed';
    } 

const text = `<strong>${msg}</strong> <b>Marks : ${result}/10</b>`;

    element1.innerHTML = text;
    element1.style.flexDirection = 'column';
    element2.style.display = 'none';
    element3.style.display = 'none';
}

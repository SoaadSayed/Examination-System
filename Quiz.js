// Questions

function Question(id, value, answer, choices) {

    this.id = id;
    this.value = value;
    this.correctAnswer = answer;
    this.choices = choices;

}

function Answer(id, value) {

    this.id = id;
    this.value = value;
}


var queArray = [];

var answersOne = [

    new Answer(1, "Object-Oriented"),
    new Answer(2, "Object-Based"),
    new Answer(3, "Assembly-language"),
    new Answer(4, "High-level"),

];

var quesOne = new Question(

    1,
    "Which type of JavaScript language is?",
    answersOne[1].id,
    answersOne
)

queArray.push(quesOne);


var answersTwo = [

    new Answer(1, "Keywords"),
    new Answer(2, "Data types"),
    new Answer(3, "Declaration statements"),
    new Answer(4, "Prototypes"),

];

var quesTwo = new Question(

    2,
    "The 'function' and 'var' are known as ___",
    answersTwo[2].id,
    answersTwo
)

queArray.push(quesTwo);


var answersThree = [

    new Answer(1, "var"),
    new Answer(2, "let"),
    new Answer(3, "var and let"),
    new Answer(4, "None of the above"),

];

var quesThree = new Question(

    3,
    "Which of the following keywords is used to define a variable in Javascript?",
    answersThree[2].id,
    answersThree
)

queArray.push(quesThree);

var answersFour = [

    new Answer(1, "Booolean"),
    new Answer(2, "Undefined"),
    new Answer(3, "Object"),
    new Answer(4, "Integer"),

]; 

var quesFour = new Question(

    4,
    "When an operator's value is NULL, the typeof returned by the unary operator is ____",
    answersFour[2].id,
    answersFour
)

queArray.push(quesFour);


var answersFour = [

    new Answer(1, "Variables"),
    new Answer(2, "Functions"),
    new Answer(3, "Objects"),
    new Answer(4, "All of the above"),

]; 

var quesFour = new Question(

    5,
    "Which of the following are closures in Javascript?",
    answersFour[3].id,
    answersFour
)

queArray.push(quesFour);


// Shuffle Array
function shuffleArray(array) {

    var temp, current;
    var top = array.length;
    
    if(top) {
        
        while (--top) {
            
            current = Math.floor(Math.random() * (top+1));
            temp = array[current];
            array[current] = array[top];
            array[top] = temp;

        }
    }

    return array;
}
var randomQues = shuffleArray(queArray);

// Get Questions
var quesSpan = document.getElementById("ques");

function showQuestion(id) {

    quesSpan.innerHTML = `${id}- ${randomQues[id - 1]["value"]}`;
}


// Get Answers
var ansDiv = document.getElementById("answers");
var solution = [];
function showAnswers(quesID) {

    var disAnswer = ["first", "second", "third", "fourth"];
    ansDiv.innerHTML = "";
    for(var i = 0; i < randomQues[quesID - 1]["choices"].length; i++) {
        
        ansDiv.innerHTML += ` <input type = "radio" class="choiceRadio" name = "choise" id = '${disAnswer[i]}'>
        <label for = "${disAnswer[i]}"> ${randomQues[quesID - 1]["choices"][i]["value"]} </label> <br><br>`;
        
    }

    // realQID => ID of Question
    var realQID = randomQues[quesID-1]['id'];
    console.log(realQID);
    //check selected color
    for(var j = 0; j < solution.length; j++) {

            //{quesId:selectedAns:}
        if(solution[j]['quesid'] == realQID) {

            if(solution[j]['selectedAns'] == 1) {
 
                document.getElementById("first").checked = true;
                
            } else if(solution[j]['selectedAns'] == 2) {
                
                document.getElementById("second").checked = true;
                
            } else if(solution[j]['selectedAns'] == 3) {
                
                document.getElementById("third").checked = true;

            } else if(solution[j]['selectedAns'] == 4) {
                
                document.getElementById("fourth").checked = true;

            }
        }
    }
}


// on Load page
var currQuesId;
showQuestion(1);
currQuesId = 1;
showAnswers(1);

// Get Selected Answer
function getSelected() {

    if(document.getElementById("first").checked) {

        return 1;
    }

    if(document.getElementById("second").checked) {

        return 2;
    }

    if(document.getElementById("third").checked) {

        return 3;
    }

    if(document.getElementById("fourth").checked) {

        return 4;
    }
}

// Push Question Solution
function puhQuesSolution(id, ansNum) {

    if(solution.length) {

        for(var i = 0; i < solution.length; i++) {

            if(id == solution[i]['quesid']) {

                solution[i]['selectedAns'] = ansNum;
                return;
            }
        }

        solution.push({

            quesid: id,
            selectedAns: ansNum
        });

    } else {

        solution.push({

            quesid: id,
            selectedAns: ansNum
        });
    }

}

// save answers
function save(id) {

    var ans = getSelected();
    if(ans) {

        puhQuesSolution(id, ans);
        console.log("shoe" + id);
    }
}

// Next button
function Next() {

    if(currQuesId <= randomQues.length - 1) {

        save(randomQues[currQuesId - 1]['id']);
        currQuesId++;
        showQuestion(currQuesId);
        showAnswers(currQuesId);
    }
    // index++;

    // if(index > 4) {

    //     index = 0;
    // }

    // quesSpan.innerHTML = `${index + 1}- ${randomQues[index].value}`;
    // ansDiv.innerHTML = "";
    // showAnswers(index + 1);
}

// Prev button
function Prev() {

    if(currQuesId - 1 > 0) {

        save(randomQues[currQuesId - 1]['id']);
        currQuesId--;
        showQuestion(currQuesId);
        showAnswers(currQuesId);
    }
    // index--;
    // if(index < 0) {

    //     index = 4;
    // }
    // quesSpan.innerHTML = `${index+1}- ${randomQues[index].value}`;
    // ansDiv.innerHTML = "";
    // showAnswers(index + 1);
}

// Matched
var markArray = [];
var markedQues = [];
var deleteMarked = [];
var markedDiv = document.getElementById("marked");
var markedSection = document.getElementById("markedSection");

function Mark() {

    // prevent to mark the same question
    for(var i = 0; i < markArray.length; i++) {

        if(currQuesId === markArray[i]) {

            return;
        }
    }

    save(randomQues[currQuesId - 1]['id']);

    markedDiv.innerHTML +=  `<div id='${currQuesId}'>
                                <p>${currQuesId}- ${randomQues[currQuesId - 1]['value']}</p>
                                <button class = "markedQues">Show</button>
                                <button class = "deleteMarked" id = '${currQuesId}'>Unmark</button>
                            </div>`;

                            
    markedSection.style.overflow = "scroll";

    markArray.push(currQuesId);

    markedQues = document.getElementsByClassName('markedQues');
    deleteMarked = document.getElementsByClassName('deleteMarked');

    // Show Marked Question
    for(var i = 0; i < markedQues.length; i++) {

        markedQues[i].addEventListener('click', function(e) {

            save(randomQues[currQuesId - 1]['id']);
            currQuesId = e.target.parentElement.id;
            showQuestion(currQuesId);
            showAnswers(currQuesId);
            for(var i = 0; i < markArray.length; i++) {

                if(currQuesId === markArray[i]) {
        
                    return;
                }
            }
        });
    }
    

    //Delete MarkedQuestion

    for(var i = 0; i < deleteMarked.length;i++) {

        deleteMarked[i].addEventListener('click',function() {

            markedQues[this.id] = undefined;
            this.parentElement.remove();
            markArray.pop(currQuesId);
        })
    }

}

// Result 
var resCounter = 0;
function calculateResult() {

    for(var i = 0; i < solution.length; i++) {

        for(var j = 0; j < randomQues.length; j++) {

            if(solution[i]['quesid'] == queArray[j]['id'] && solution[i]['selectedAns'] == queArray[j]['correctAnswer']) {

                resCounter += 10;
            }

        }
    }
}

var firstName = getCookie("fname");
var lastName = getCookie("lname");

function showResult() {

    save(randomQues[currQuesId - 1]['id']);
    calculateResult();
    document.getElementById("container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("scoreResult").innerHTML = resCounter + " Points";
    document.getElementById("name").innerHTML = firstName + " " + lastName;
}


// Countdown
var startMinutes = 2;
var time = startMinutes * 60;
var countDouwnEle = document.getElementById("timer");

setInterval(UpdateCountDown, 1000);
// Move();

function UpdateCountDown() {

    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ?  "0" + seconds : seconds;
    if(minutes < 0) {

        countDouwnEle.style.backgroundColor = "red";
        document.getElementById("container").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("scoreResult").innerHTML = resCounter + " Points";
        document.getElementById("name").innerHTML = firstName + " " + lastName;

    } else {
        
        countDouwnEle.innerHTML = `${minutes}:${seconds}`;
        time--;
    }

}
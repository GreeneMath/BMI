let firstName1 = document.querySelector("#first-name-1");
let firstName2 = document.querySelector("#first-name-2");
let lastName1 = document.querySelector("#last-name-1");
let lastName2 = document.querySelector("#last-name-2");
let height1 = document.querySelector("#height-1");
let height2 = document.querySelector("#height-2");
let weight1 = document.querySelector("#weight-1");
let weight2 = document.querySelector("#weight-2");
let results = document.querySelector("p.results");
let name1, name2, heightValue1, heightValue2, weightValue1, weightValue2;
const button = document.querySelector(".button-submit");
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}
function calculateBMI(){
    name1 = fullName(firstName1.value, lastName1.value);
    name2 = fullName(firstName2.value, lastName2.value);
    heightValue1 = parseInt(height1.value);
    heightValue2 = parseInt(height2.value);
    weightValue1 = parseInt(weight1.value);
    weightValue2 = parseInt(weight2.value);
    let person1BMI = 703 * ((weightValue1)/(Math.pow(heightValue1, 2)));
    let person2BMI = 703 * ((weightValue2)/(Math.pow(heightValue2, 2)));
    if(person1BMI > person2BMI){
        results.innerHTML = `${name1} has a larger BMI than ${name2}`;
    }
    else{
        results.innerHTML = `${name2} has a larger BMI than ${name1}`;
    }
    results.style.display = "block";
}
button.addEventListener("click", calculateBMI);
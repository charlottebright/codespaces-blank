// declaring variables

let math = document.querySelector(".math");
let english = document.querySelector(".english");
let history = document.querySelector(".history");
let science = document.querySelector(".science");


let button = document.querySelector(".button");
console.log("x")
let result = document.querySelector(".result");


let mGrade;
let eGrade;
let hGrade;
let sGrade;


const inputInfo = () => {
console.log("apple2");
mGrade=math.value;
eGrade=english.value;
hGrade=history.value;
sGrade=science.value;

console.log(mGrade);
console.log(eGrade);
console.log(hGrade);
console.log(sGrade);

};

const convert = (letter) => {

if (letter==="A"){
return 4;
} else if (letter==="B") {
    return 3;
}else if (letter==="C") {
    return 2;
}else if (letter==="D")
 {
    return 1;
 }else {
    return 0;
 }



};







let mNumber;
let eNumber;
let hNumber;
let sNumber;




const display = () => {
   mNumber= convert(mGrade);
   eNumber= convert(eGrade);
   hNumber= convert(hGrade);
   sNumber= convert(sGrade);
       
    let finaleGrade= (mNumber+eNumber+hNumber+sNumber)/4;
    
        result.innerHTML=`Your GPA is ${finaleGrade}`;
        
        };
    

 button.onclick = function () {
            inputInfo();
            convert();
            display();
            
    }; 
//Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

//A > 79, B - 60 to 79 C -  59 to 49, D - 40 to 49, E - less 40.


const prompt= require("prompt-sync")();
var marks = prompt("Enter your marks")
//marks between 79 and 100
if(marks> 79 && marks <= 100){
    console.log( "A")
}
//marks between 60 and 79
else if (marks>=60 && marks <=79){
    console.log(" B")

 //marks between 49 and 59   
}else if (marks>=49 && marks <=59){
    console.log(" C")}
    //marks between 49 and 40

    else if (marks>=40 && marks <=49){
        console.log("D")
    }
    
        else {
            console.log("E")
        }
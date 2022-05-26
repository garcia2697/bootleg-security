// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var num = [];
var spec = [];
var up = [];
var low = [];
var pass= [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

  
    
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  

  // Prompts user to pick length of password and saves data
    var keylength = prompt("Pick the length of your password", "Type the length here");

  keylength = parseInt(keylength);

    if (!keylength){

      alert("Add Value")
    }
    
    
    else if (keylength < 8 && keylength > 128)
      {
      alert("This number does not match criteria");
      console.log("Length is " + keylength);
      }


    else
      {
      alert("This does meet criteria");
      }

// Selects all the prompts


     // Prompts user to select numerical selection
     var number = prompt("Pick if you want numerical elements", "Type Yes or No here");
        
     if (number == "yes" || number == "Yes" || number == "YES"){
       var num = ["0","1","2","3","4","5","6","7","8","9"];
       
     }

     else if (number == "no" || number == "No" || number == "NO")
     {
       var num = [null];
     } 

     else {
       alert("Enter yes or no")
     }




        
    // Prompts user to select lower case selection
        var lower = prompt("Pick if you want lowercase elements", "Type Yes or No here");
        
        if (lower == "yes" || lower == "Yes" || lower == "YES")
        {
          var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

          
        }

        else if ((lower == "no" || lower == "No" || lower == "NO"))
        {
          var low = [null];
        }

        else {
          alert("Enter yes or no")
        }

    // make upper case selection
        var upper = prompt("Pick if you want uppercase elements", "Type Yes or No here");
        
        if (upper == "yes" || lower == "Yes" || lower == "YES")
        {
            var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
            
        }

        else if((upper == "no" || lower == "No" || lower == "NO"))
        {
          var up = [null];
        }

        else {
          alert("Enter yes or no")
        }




    // Prompts user to select special character selection

     var special = prompt("Pick if you want special character elements", "Type Yes or No here");
        
     if (special == "yes" || special == "Yes" || special == "YES"){
       var spec = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
     }

     else if (special == "no" || special == "No" || special == "NO")
     {
       var spec = [null];
     } 

     else {
      alert("Enter yes or no")
    }




 // Bring it all together

 // Empty variable for the password length
 var Empty = [];
  pass =Empty.concat(num,low,up,spec);
 // Loop for random selection
 for (var i = 0; i < keylength; i++) {
   var allChoices = pass[Math.floor(Math.random() * pass.length)];
   Empty.push(allChoices);
   console.log(allChoices);
 }

 // Join and return the password 
 var password = Empty.join("");
 console.log("Your Pasword is: " + password);
 return password;

};
 
  
     





  




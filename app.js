let arrData=[];

if(localStorage.arrData != null){
    arrData=JSON.parse(localStorage.arrData);
  }
 
let userName;
let userPassword;
let userEmail;
let userNumber;

function validateName() {
	let Name = document.forms["datasub"]["username"].value.toLowerCase();
	if (Name == "") {
	  alert("Name must be filled out");
	  return false;

	}else if(Name.includes(" ")){
		alert("Name must be filled with no spaces");
		return false;	
	}
  }


  function validatePassword(){
	let iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	let password = document.forms["datasub"]["userpassword"].value;
	if (password.length<8) {
		alert ("The password length must be more than 8 characters");
		return false;
			}
	for (let i = 0; i < password.length; i++) {
		if (iChars.indexOf(password.charAt(i)) != -1) {
		alert ("The password has special characters. \nThese are not allowed.\n");
		return false;
			}
		}
	}   

	function validateEmail(){
		let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?";
		let Email = document.forms["datasub"]["useremail"].value.toLowerCase();
		 if(!Email.includes("@")  || !Email.includes(".com") ){
			alert("Please enter a valid Email EX.. majdi@gamil.com");
			return false;
		}
		for (let i = 0; i < Email.length; i++) {
			if (iChars.indexOf(Email.charAt(i)) != -1) {
			alert ("The Email has special characters. \nThese are not allowed.\n");
			return false;
				}
			}
	
		}   

		function validateNumber(){
			let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?@.";
			let Number = document.forms["datasub"]["usernumber"].value;
  
			 if( !(Number.includes("07"))    || !(Number.length ==10)  ){
				alert("Please enter a valid number ex. 0799855850");
				return false;
			}
			
			for (let i = 0; i < Number.length; i++) {
				if (iChars.indexOf(Number.charAt(i)) != -1) {
				alert ("The Number has special characters. \nThese are not allowed.\n");
				return false;
					}
				}
		
			}   


let DataCollected=document.getElementById("datasub");

DataCollected.addEventListener("submit",function(event){
event.preventDefault();

  userName=event.target.username.value;
  userPassword=event.target.userpassword.value;
  userEmail=event.target.useremail.value;
  userNumber=event.target.usernumber.value;
  validateName()
  validatePassword()
  validateEmail()
  validateNumber()
  if(arrData.includes(userName)){

	alert("Username already exists. welcome "+userName);
  }else{
	arrData.push(userName);
	localStorage.setItem('arrData',JSON.stringify(arrData) );

  }



//   DataCollected.reset();


  


     
  
});









function myFunction(){

document.getElementById("regdiv").style.display="none";
document.getElementById("back").style.display="flex";
document.getElementById("title").innerHTML = "Student Details";
document.getElementById("display").style.display="flex";

var fname = document.getElementById("fname").value;
var mname = document.getElementById("mname").value;
var lname = document.getElementById("lname").value;
var dob = document.getElementById("dob").value;
var gender = document.getElementById("gender").value;
var email= document.getElementById("email").value;
var mobile = document.getElementById("mobile").value;

var add1 = document.getElementById("add1").value;
var add2 = document.getElementById("add2").value;
var add3 = document.getElementById("add3").value;
var add4 = document.getElementById("add4").value;
var add5 = document.getElementById("add5").value;

document.getElementById("sname").innerHTML=fname+" "+mname+" "+lname;
document.getElementById("sdob").innerHTML=dob;
document.getElementById("sgender").innerHTML=gender;
document.getElementById("semail").innerHTML=email;
document.getElementById("smobile").innerHTML=mobile;
document.getElementById("saddress").innerHTML=add1+", "+add2+", "+add3+", "+add4+", "+add5;

}


function back(){
    document.getElementById("regdiv").style.display="flex";
    document.getElementById("back").style.display="none";
    document.getElementById("title").innerHTML = "Student Registration";
    document.getElementById("display").style.display="none";
}
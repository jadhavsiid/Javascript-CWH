// Vid-29: Chap-6 Practise Set

// Q.1) WAP using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.
// Q.2) In Q.1 use Confirm to ask the user if he wants to see the prompt again ?
// Q.3) In Previous two questions use console.error to log the error if age entered is negative

let runagain = true;
while (runagain == true) {
  let a = prompt("Hey, Enter Your Age: ");
  Number.parseFloat(a);
  if (a <= 0) {
    console.error("You entered a wrong age");
    break;
  }
  if (a >= 18 && a>0) {
    alert("Congratulations, You're Eligible for a Driving License.");
  } else {
    alert("You aren't eligible for a license");
  }


  runagain = confirm("Do you want to enter your age again ?");
}

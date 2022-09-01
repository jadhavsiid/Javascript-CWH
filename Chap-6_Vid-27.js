// Vid-27: Alert, Prompt and Confirm
alert("Enter value of a: ");
let a = prompt("Enter a here: ","578");
// document.write(a);
a = Number.parseInt(a);
alert("You Entered a of type " + typeof a);

let write = confirm('Do you want to write it to the page ?')
if(write){
    document.write(a)
}
else{
    document.write('Pleae allow me to write ')
}
;

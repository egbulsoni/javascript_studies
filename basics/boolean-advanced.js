let isAccountLocked = true;
let userRole = 'user';

if(isAccountLocked){
    console.log('account is locked')
} else if (userRole === 'admin'){
    console.log('Welcome Admin');
} else {
    console.log('Welcome');
}

let temp = 45;

if (temp <= 32){
    console.log("It's freezing outside");
} else if (temp >= 110) {
    console.log("It's way too hot outside");
} else {
    console.log("You can go outside, the weather is good!");
}
let temp = 150;

//logical and && - true if both sides are true
// logical or || - true if at least one side is true

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out');
}

if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside');
}

let isGuestOneVegan = true
let isGuestTwoVegan = false

// both vegan - only vegan dishes
// at least one vegan - offer some vegan option
// else, offer up anything

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('salad and greens');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('meat and vegetables');
} else {
    console.log('anything you want')
}

// Exercise 1.1

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hour = today.getHours();
var min = today.getMinutes();
var second = today.getSeconds();

var suffix = (hour >= 12) ? " PM" : " AM";
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === "0" && suffix === " PM") {
    if (min === "0" && sec === "0") {
        hour = 12;
        suffix = " Noon";
    }
} else if (hour === "0" && suffix === " AM") {
    if (min === "0" && sec === "0") {
        hour = 12;
        suffix = " Midnight";
    }
}
var todayHTML = document.getElementById("todayHTML");
var timeHTML = document.getElementById("timeHTML");

todayHTML.innerHTML = "Today is : " + daylist[day] + ".";
timeHTML.innerHTML = "Current time is : " + hour + suffix + " : " + min + " : " + second;


// Exercise 1.2

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

//Exercise 1.3

fetch('https://httpbin.org/cookies', {
        headers: {
            Cookie: 'xxx=yyy'
        }
    }).then(response => response.json())
    .then(data => console.log(JSON.stringify(data, null, 2)));

//Exercise 1.4

var checkValidJson = str => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};
console.log(checkValidJson('{"name":"Lam","age":21}'));
console.log(checkValidJson('{"name":"Lam",age:"21"}'));
console.log(checkValidJson(null));
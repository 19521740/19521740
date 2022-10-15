function replaceButtonText(buttonId, text) {
    if (document.getElementById) {
        var button = document.getElementById(buttonId);
        if (button) {
            if (button.childNodes[0]) {
                button.childNodes[0].nodeValue = text;
            } else if (button.value) {
                button.value = text;
            } else if (button.innerHTML) {
                button.innerHTML = text;
            }
        }
    }
}
replaceButtonText('Submit', 'New submit button');

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


function getSize() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    document.getElementById('wh').innerHTML = "<h1>Width: " + w + " Height: " + h + "</h1>";
}
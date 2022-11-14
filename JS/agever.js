function login() {
    var x = document.getElementById("log").value;
    var y= document.getElementById("pas").value;
    if( x == "akash" || y == "admin") {
    location.replace('age.html');
    } else 
        alert("Incorrect Login Details");
}

function back() {
    location.replace('index.html');
  }

function skip() {
    location.replace('age.html');
}

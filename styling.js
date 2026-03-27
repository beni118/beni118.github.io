var colors = [];
var defaultPage = "mainMenu.html";

function parseCookies() {
    const cookieArray = document.cookie.split('; ');
    const cookieObject = {};
    
    cookieArray.forEach(cookie => {
        const [key, value] = cookie.split('=');
        cookieObject[key] = decodeURIComponent(value);
    });
    
    return cookieObject;
}
var cookies = parseCookies(document.cookie);
console.log(cookies);

var topBar = document.getElementById("topBar");
var sideBar = document.getElementById("sideBar");
var background = document.getElementById("background");

topBar.style.backgroundColor = cookies.secondaryColor;
topBar.style.borderBottomColor = cookies.accentColor;

sideBar.style.backgroundColor = cookies.secondaryColor;

background.style.backgroundColor = cookies.mainColor;
background.style.color = cookies.fontColor;
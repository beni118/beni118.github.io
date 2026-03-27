var main = document.getElementById("MainColor");
var secondary = document.getElementById("SecondaryColor");
var accent = document.getElementById("AccentColor");

var apply = document.getElementById("ApplyColor");

var topBar = document.getElementById("topBar");
var sideBar = document.getElementById("sideBar");
var background = document.getElementById("background");
var divider = document.getElementById("divider");

function parseCookies() {
    const cookieArray = document.cookie.split('; ');
    const cookieObject = {};
    
    cookieArray.forEach(cookie => {
        const [key, value] = cookie.split('=');
        cookieObject[key] = decodeURIComponent(value);
    });
    
    return cookieObject;
}

if (document.cookie != "") {
    var cookies = parseCookies(document.cookie);
    main.value = cookies.mainColor;
    secondary.value = cookies.secondaryColor;
    accent.value = cookies.accentColor;
} else {
    main.value = "#f37310";
    secondary.value = "#ff7f50";
    accent.value = "#ffffff";
}



function applyColor() {
    document.cookie = `mainColor=${main.value}; path=/; max-age=34560000`;
    document.cookie = `secondaryColor=${secondary.value}; path=/; max-age=34560000`;
    document.cookie = `accentColor=${accent.value}; path=/; max-age=34560000`;
    topBar.style.backgroundColor = secondary.value;
    topBar.style.borderBottomColor = accent.value;

    sideBar.style.backgroundColor = secondary.value;

    background.style.backgroundColor = main.value;

    divider.style.borderTopColor = accent.value;
}

apply.onclick = applyColor;
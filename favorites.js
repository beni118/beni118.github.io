function parseCookies() {
    const cookieArray = document.cookie.split('; ');
    const cookieObject = {};
    
    cookieArray.forEach(cookie => {
        const [key, value] = cookie.split('=');
        cookieObject[key] = decodeURIComponent(value);
    });
    
    return cookieObject;
}

var favorites = JSON.parse(parseCookies()["favorites"]);

function toggleFavorite(path) {
    if(favorites[path]) {
        delete favorites[path];
    } else {
        favorites[path] = true;
    }
    document.cookie = `favorites=${JSON.stringify(favorites)}; path=/; max-age=34560000`
}
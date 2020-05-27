export const reusableFunction = () => {
    // Usage in App.js file
    console.log('%c Reusable Function usage in the App.js file ', 'background: #222; color: #bada55');
    console.log('%c Please let me know of any improvements!', 'background: #222; color: #bada55');
}

export const setCookie = (name, value, days) => {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expiresIn = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expiresIn + ";path=/";
}

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
